angular.module("meuSite").config(function ($stateProvider, $urlRouterProvider) {
 
    var home = {
        name: "paginaInicial",
        url: "/",
        controller: "meuSiteCtrl",
        templateUrl: "view/paginaInicial.html"
    };
    
    /**
    var artista = {
        name: "artista",
        url: "/artista/:nomeArtista",
        templateUrl: "view/paginaArtista.html",
        controller: "artistaCtrl",
        resolve: {
            artista: function ($stateParams, artistasService) {
                var artista = artistasService.getArtista($stateParams.nomeArtista);
                return artista;
            }
        }
    };

    var playlists = {
        name: "playlists",
        url: "/playlists",
        templateUrl: "view/paginaPlaylists.html",
        controller: "playlistsCtrl"
    }

    var musicasPlaylist = {
        name: "musicasPlaylist",
        url: "/musicas/playlist/:nomePlaylist",
        templateUrl: "view/musicasPlaylist.html",
        controller: "musicasPlaylistCtrl",
        resolve: {
            playlist: function ($stateParams, playlistsService) {
                var playlist = playlistsService.getPlaylist($stateParams.nomePlaylist);
                return playlist;
            }
        }
    };

    var artistasFavoritos = {
    name: "artistasFavoritos",
    url: "/artistas-favoritos",
    templateUrl: "view/artistasFavoritos.html",
    controller: "artistasFavoritosCtrl"
    }
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state(home);
    $stateProvider.state(artista);
    $stateProvider.state(playlists);
    $stateProvider.state(musicasPlaylist);
    $stateProvider.state(artistasFavoritos);
    
    **/
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state(home);
});