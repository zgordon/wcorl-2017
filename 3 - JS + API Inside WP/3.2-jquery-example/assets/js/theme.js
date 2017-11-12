(function( $ ) {
    var   container = document.getElementById( 'main' ),
            wpRestUrl = jsforwp_globals.rest_url;

    (function init(){

        getPosts();

    })();

    function getPosts() {

        // Set the type to 'get'
        // Append 'wp/v2/posts/' to the wpRestUrl
        // Set per_page equal to 3
        $.ajax({
            type: '__CHANGE__',
            url: wpRestUrl + '__CHANGE__',
            data: {
                per_page: __CHANGE__
            },
            success: function( response ) {

                container.innerHTML = '';

                // For each post inside of the response
                for( let post of __CHANGE__ ) {
                    renderPost( post );
                }

                var links = document.querySelectorAll( '#main h2 a' );
                for( let link of links ) {
                    link.addEventListener( 'click', getPost );
                }

            }
        })
    }

    function renderPost( post ) {

        var h2 = document.createElement( 'h2' ),
            markup = '';

        markup += `<a href="#${post.link}" data-id="${post.id}">`;
        markup += post.title.rendered;
        markup += '</a>';

        h2.innerHTML = markup;
        container.appendChild( h2 );

    }

    function getPost( event ) {

        var id = event.target.dataset.id;

        // Set type equal to 'get'
        // Append id onto the end of the wpRestUrl
        $.ajax({
            type: '__CHANGE__',
            url: wpRestUrl + 'wp/v2/posts/' + __CHANGE__,
            success: function( response ) {

                container.innerHTML = '';
                // Pass the response to renderFullPost()
                renderFullPost( __CHANGE__ );

            }
        });

    }

    function renderFullPost( post ) {

        var article = document.createElement('article'),
            markup = '';

        article.classList.add( 'post' );

        markup += '<p><a class="back" href="#">Go Back</a></p>';
        markup += `<h1>${post.title.rendered}</h1>`;
        markup += `<div class="entry-content">${post.content.rendered}</div>`;

        article.innerHTML = markup;

        article.querySelector( '.back' ).addEventListener( 'click', getPosts );

        container.appendChild( article );

    }
})( jQuery );
