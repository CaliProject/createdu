<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\Post;
use Illuminate\Http\Request;

use Createdu\Http\Requests;
use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\Admin\AddOrUpdatePostRequest;

class PostsController extends Controller
{
    public function showPost(Post $post)
    {
        return view('admin.posts.edit',compact('post'));
    }

    public function showAddPost()
    {
        return view('admin.posts.add');
    }

    public function deletePost(Post $post)
    {
        $post->delete();

        return $this->successResponse();
    }

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

    public function addPost(AddOrUpdatePostRequest $request)
    {
        dd($request->except(['_method','_token']));
    }
}
