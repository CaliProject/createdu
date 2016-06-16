<?php

namespace Createdu\Library\Traits\Auth;

trait AuthenticatesAndRegistersUsers {

    /*
    |------------------------------------------------------------
    | AuthenticatesAndRegistersUsers Trait
    | 用户验证与注册逻辑Trait
    |------------------------------------------------------------
    |
    | @author  Cali
    |
    */
    
    use AuthenticatesUsers, RegistersUsers, SocialAuthenticatesUsers {
        AuthenticatesUsers::redirectPath insteadof RegistersUsers;
    }
}