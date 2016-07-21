(function() {
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call( document.querySelectorAll( 'Input.Input__field' ) ).forEach( function( InputEl ) {
        // In case the Input is already filled..
        if( InputEl.value.trim() !== '' ) {
            classie.add( InputEl.parentNode, 'Input--filled' );
        }

        // Events:
        InputEl.addEventListener( 'focus', onInputFocus );
        InputEl.addEventListener( 'blur', onInputBlur );
    } );

    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'Input--filled' );
    }

    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'Input--filled' );
        }
    }
})();