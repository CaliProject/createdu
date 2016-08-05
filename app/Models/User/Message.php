<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'content', 'metas'
    ];

    /**
     * Set 'to' user.
     *
     * @param User $user
     * @return $this
     */
    public function to(User $user)
    {
        $this->to_user_id = $user->id;

        return $this;
    }

    /**
     * Set 'from' user.
     *
     * @param User $user
     * @return $this
     */
    public function from(User $user)
    {
        $this->from_user_id = $user->id;

        return $this;
    }

    /**
     * Insert message and metas.
     *
     * @param array $attr
     * @return $this
     */
    public function said($attr = [])
    {
        $this->save();
        $this->update($attr);

        return $this;
    }
}
