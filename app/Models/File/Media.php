<?php

namespace Createdu;

use Storage;
use Illuminate\Http\UploadedFile;
use Illuminate\Database\Eloquent\Model;
use Createdu\Library\Traits\Model\TimeSortable;

class Media extends Model {

    use TimeSortable;

    /**
     * {@inheritdoc}
     * @var array
     */
    protected $fillable = [
        'src', 'title'
    ];

    /**
     * Move the media file into storage.
     *
     * @param UploadedFile $file
     * @param User         $user
     * @return static
     *
     * @author Cali
     */
    public static function move(UploadedFile $file, User $user)
    {
        $path = 'media/' . date('Y') . '/' . date('m') . '/' . $user->id . '/' . $file->hashName();
        Storage::put($path, file_get_contents($file->getRealPath()));

        $media = new static([
            'src'   => $path,
            'title' => $file->getClientOriginalName()
        ]);
        $user->media()->save($media);

        return $media;
    }
}
