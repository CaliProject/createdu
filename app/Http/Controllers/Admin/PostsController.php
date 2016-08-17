<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\Post;
use Illuminate\Http\Request;

use Createdu\Http\Requests;
use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\Admin\AddOrUpdatePostRequest;

class PostsController extends Controller
{
    /**
     * 显示文章编辑页面
     * 
     * @param Post $post
     * @return mixed
     */
    public function showPost(Post $post)
    {
        return view('admin.posts.edit',compact('post'));
    }

    /**
     * 显示文章添加页面
     * 
     * @return mixed
     */
    public function showAddPost()
    {
        return view('admin.posts.add');
    }

    /**
     * 删除一条文章记录
     * 
     * @param Post $post
     * @return array
     * @throws \Exception
     */
    public function deletePost(Post $post)
    {
        $post->delete();

        return $this->successResponse();
    }

    /**
     * 批量操作文章
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
                    Post::findOrFail($id)->delete();
                }
                break;
        }

        return $this->successResponse();
    }

    /**
     * 添加一条文章记录
     * 
     * @param AddOrUpdatePostRequest $request
     */
    public function addPost(AddOrUpdatePostRequest $request)
    {
        dd($request->except(['_method','_token']));
    }

    public function stickPost(Post $post)
    {
        $post->update(['sticky' => !$post->sticky]);

        return $this->successResponse();
    }

    public function essencifyPost(Post $post)
    {
        $post->update(['essential' => !$post->essential]);

        return $this->successResponse();
    }
}
