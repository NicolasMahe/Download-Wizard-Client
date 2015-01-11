angular.module('service_recognizeMetadata', [])

.factory('service_recognizeMetadata', function() {
    return function(titleScene) {
        var data = {
            title: null,
            quality: null,
            year: null,
            format: null,
            saison: null,
            episode: null,
            is3d: false
        };

        regexRemove3D = /^(.+?)(3D(.+)?)?$/i;
        
        quality = /(1080p|720p)/i.exec(titleScene);
        if(quality !== null) {
            data.quality = quality[1];
        }
        
        format = /(BluRay|WEB-DL|HDTV|WEBRIP|BDRIP|BRRIP)/i.exec(titleScene);
        if(format !== null) {
            data.format = format[1];
        }
        
        is3d = /(3D)/i.exec(titleScene);
        if(is3d !== null) {
            data.is3d = true;
        }
        
        serie = /S([0-9]{2})E([0-9]{2})/i.exec(titleScene);
        if(serie !== null) { //is a serie
            data.saison = parseInt(serie[1], 10);
            data.episode = parseInt(serie[2], 10);
            
            title = /^(.+)S([0-9]{2})E([0-9]{2})/i.exec(titleScene);
            if(title !== null) {
                data.title = title[1].trim().toLowerCase();
            }
        } else { //is a movie
            title = /^(\[.+\])?(.+?)(\()?((19|20)[0-9]{2})(\))?/i.exec(titleScene);
            if(title !== null) {
                data.title = title[2].trim().toLowerCase();
                data.year = parseInt(title[4], 10);
            }
        }

        if(data.title) {
            title = regexRemove3D.exec(data.title);
            if(title) {
                data.title = title[1].trim();
            }
        }
        
        return data;
    };
});