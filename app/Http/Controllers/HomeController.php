<?php

namespace Createdu\Http\Controllers;

use Createdu\Http\Requests;
use Illuminate\Http\Request;
use Createdu\Library\Traits\Controller\ImageResponse;

class HomeController extends Controller {

    use ImageResponse;

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Get a certain media file.
     *
     * @param $year
     * @param $month
     * @param $user
     * @param $path
     *
     * @return mixed
     */
    public function getMedia($year, $month, $user, $path)
    {
        return $this->imageResponse('media/' . implode('/', [$year, $month, $user, $path]));
    }
}
