//your JS code here. If required.
const bands = [
            'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
            'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
            'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
            'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
        ];

        function stripArticle(bandName) {
            return bandName.replace(/^(a |an |the )/i, '').trim();
        }

        function sortBands(bands) {
            return bands.sort((a, b) => {
                if (stripArticle(a) < stripArticle(b)) return -1;
                if (stripArticle(a) > stripArticle(b)) return 1;
                return 0;
            });
        }

        function displayBands(bands) {
            const bandList = document.getElementById('bands');
            bandList.innerHTML = bands.map(band => `<li>${band}</li>`).join('');
        }

        const sortedBands = sortBands(bands);
        displayBands(sortedBands);
