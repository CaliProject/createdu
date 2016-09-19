<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\Post;
use Createdu\User;
use Createdu\Course;
use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\Admin\CreateFactoryRequest;

class CenterController extends Controller
{
    /**
     * 显示数据工厂页面
     * 
     * @return mixed
     */
    public function showFactory()
    {
        return view('admin.centers.factory');
    }

    /**
     * 创建工厂数据
     * 
     * @param CreateFactoryRequest $request
     * @return array
     */
    public function createFactory(CreateFactoryRequest $request)
    {
        try {
            $this->generateFactoryModel($request->input('model'),intval($request->input('quantity')));
        } catch (\Exception $e) {
            return $this->errorResponse(trans('views.admin.pages.data-center.factory.half-created'));
        }

        return $this->successResponse(
            trans('views.admin.pages.data-center.factory.created', [
                'q' => $request->input('quantity'),
                'model' => trans('views.admin.pages.data-center.factory.models.' . $request->input('model'))
            ]));
    }

    /**
     * 生成相应的工厂模型
     * 
     * @param $model
     * @param $quantity
     * @return mixed
     */
    protected function generateFactoryModel($model, $quantity)
    {
        switch ($model){
            case 'user':
                $model = User::class;
                return factory($model)->times($quantity)->create();
            case 'post':
                $class = new Post;
                $model = Post::class;
                break;
            case 'course':
                $class = new Course;
                $model = Course::class;
                break;
        }
        $models = factory($model)->times($quantity)->make();

        return $class->insert($models->toArray());
    }
}
