<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\Course;
use Illuminate\Http\Request;
use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\Admin\AddOrUpdateCourseRequest;


class CoursesController extends Controller
{
    
    public function showCourse($status)
    {
        switch ($status) {
            case 'all':
                $courses = Course::paginate();
                return view('admin.courses.index',compact('courses'));
            case 0:
            case 1:
            case 2:
            case 3:
                $courses = Course::where('status',"$status")->paginate();
                return view('admin.courses.index',compact('courses'));
            default:
                $courses = Course::paginate();
                return view('admin.courses.index',compact('courses'));
        }
    }

    /**
     * 显示课程详情页面
     *
     * @return mixed
     */
    public function showEditCourse(Course $course)
    {
        return view('admin.courses.edit',compact('course'));
    }

    /**
     * 显示添加课程页面
     *
     * @return mixed
     */
    public function showAddCourse()
    {
        return view('admin.courses.add');
    }

    /**
     * 删除一门课程
     *
     * @param Course $course
     * @return array
     * @throws \Exception
     */
    public function deleteCourse(Course $course)
    {
        $course->delete();

        return $this->successResponse();
    }

    /**
     * 批量操作课程
     *
     * @param Request $request
     * @return array
     */
    public function bulkAction(Request $request)
    {
        $action = $request->input('action');

        switch ($action) {
            case 'delete':
                foreach(explode(',', $request->input('IDs')) as $id) {
                    Course::findOrFail($id)->delete();
                }
                break;
            case 'trash':
                foreach(explode(',', $request->input('IDs')) as $id) {
                    Course::findOrFail($id)->update(['status' => 3]);
                }
                break;
            case 'revert':
                foreach(explode(',', $request->input('IDs')) as $id) {
                    $course = Course::findOrFail($id);
                    $course->update(['status' => $course->history_status]);
                }
                break;
        }

        return $this->successResponse();
    }

    /**
     * 添加一条课程记录
     *
     * @param  $request
     * @return array
     */
    public function addCourse(AddOrUpdateCourseRequest $request)
    {
        return Course::create($request->except(['_token','_method'])) ?
            $this->successResponse(trans('views.admin.operation.published'),route('admin.index', ['section' => 'courses'], false)) :
            $this->errorResponse(trans('views.admin.operation.published-error'));
    }

    /**
     * 更新一条课程记录
     *
     * @param AddOrUpdateCourseRequest $request
     * @param Course $course
     * @return array
     */
    public function updateCourse(AddOrUpdateCourseRequest $request,Course $course)
    {
        return $course->update($request->except(['_token','_method'])) ?
            $this->successResponse(trans('views.admin.operation.updated')) :
            $this->errorResponse(trans('views.admin.operation.updated-error'));
    }

    /**
     * 将一条课程记录放入回收站
     * 
     * @param Course $course
     * @return array
     */
    public function trashCourse(Course $course)
    {
        $course->update(['status' => 3]);

        return $this->successResponse();
    }

    /**
     * 将一条课程记录还原回原来的状态
     * 
     * @param Course $course
     * @return array
     */
    public function revertCourse(Course $course)
    {
        $course->update(['status' => $course->history_status]);
        
        return $this->successResponse();
    }
}
