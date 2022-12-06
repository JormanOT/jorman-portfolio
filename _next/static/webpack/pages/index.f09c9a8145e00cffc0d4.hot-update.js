self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Movie Wep App',
  description: "Plataforma informativa de peliculas con contenido dinamico y autenticacion, hecha con Next y Sanity",
  image: '/images/movies.webp',
  tags: ['Nextjs', 'Sanity', 'API', 'NextAuth', 'Tailwindcss'],
  source: 'https://github.com/JormanOT/movie',
  visit: 'https://movie-jormanot.vercel.app/',
  id: 0
}, {
  title: 'Ecommerce Wep App',
  description: "Plataforma web para comprar en linea productos variados, con contenido dinamico, creada usando Nextjs y Sanity",
  image: '/images/ecommerce.webp',
  tags: ['Nextjs', 'Sanity', 'API'],
  source: 'https://github.com/JormanOT/ecommerce-app',
  visit: 'https://ecommerce-app-jormanot.vercel.app/',
  id: 1
}, {
  title: 'Shared images web App',
  description: "Plataforma web cuya finalidad es compartir fotos, fondos, viajes, lugares, desarrollado usando React y Sanity.",
  image: '/images/sharedme.webp',
  tags: ['React', 'Sanity', 'Google Login', 'API'],
  source: 'https://github.com/JormanOT/sharedme',
  visit: 'https://square-frost-2963.on.fleek.co/',
  id: 2
}, {
  title: 'Fitness Wep App',
  description: "Aplicacion web, para mostrar los diferentes tipos de ejercicios que se pueden aplicar, para crear una simple rutina, aprovechando la informacion obtenida de una API externa",
  image: '/images/GYM.webp',
  tags: ['React', 'styled-components', 'JavaScript', 'API'],
  source: 'https://github.com/JormanOT/fitness-app',
  visit: 'https://broken-breeze-1095.on.fleek.co/',
  id: 3
}, {
  title: 'React Native Web App',
  description: "Usando React y Tailwindcss para crear una landing pages que sirva como presentacion para el diseño realizado con React Native de la app de NFTs marketplace.",
  image: '/images/NFTs.webp',
  tags: ['React', 'Tailwindcss', 'JavaScript'],
  source: 'https://github.com/JormanOT/react-native-ui-app-web',
  visit: 'https://flat-haze-2346.on.fleek.co/',
  id: 4
}, {
  title: 'NFTs Marketplace App',
  description: "Diseño limpio y fluido, La aplicación contiene dos pantallas. La primera pantalla enumera todos los NFT, mientras que la segunda muestra los detalles de un NFT específico.",
  image: '/images/APP.webp',
  tags: ['React Native', 'JavaScript', 'Expo'],
  source: 'https://github.com/JormanOT/react-native-ui-app',
  visit: 'https://expo.dev/@jormanot/expoClient?serviceType=classic&distribution=expo-go',
  id: 5
}, {
  title: 'Simple React Movie App',
  description: "Aplicacion web simple usando react, que funciona para consultar a la base de datos de omDB la informacion de peliculas.",
  image: '/images/webapp.webp',
  tags: ['React', 'JavaScript', 'API'],
  source: 'https://github.com/JormanOT/simple-movie-app',
  visit: 'https://shrill-snow-3290.on.fleek.co/',
  id: 6
}, {
  title: 'API Venezuela',
  description: "API documentativa sobre Venezuela, entrega informacion relevantes a su cultura, regiones, fauna, comercio y sitios de interes, basado en sus estados.",
  image: '/images/API-Venezuela.webp',
  tags: ['Express', 'JavaScript', 'Nodejs'],
  source: 'https://github.com/JormanOT/VenezuelaAPI',
  visit: 'https://rapidapi.com/jormanortega34-b8bxhkl-nAK/api/venezuela/',
  id: 7
}];
var TimeLineData = [{
  year: 2019,
  text: 'Empezé el viaje haciendo bootcamp con Platzi'
}, {
  year: 2020,
  text: 'Culmine el bootcamp en Platzi, y continue adquiriendo más conocimiento de forma autodidacta'
}, {
  year: 2021,
  text: 'Trabajé por un tiempo como Freelancer'
}, {
  year: 2022,
  text: 'Actualmente sigo expandiendo mi stack de tecnologias.'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFFLHFHQUZmO0FBR0lDLE9BQUssRUFBRSxxQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFzQixLQUF0QixFQUE0QixVQUE1QixFQUF3QyxhQUF4QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSxtQ0FMVjtBQU1FQyxPQUFLLEVBQUUsb0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLG1CQURUO0FBRUVDLGFBQVcsRUFBRSxnSEFGZjtBQUdJQyxPQUFLLEVBQUUsd0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBc0IsS0FBdEIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsMkNBTFY7QUFNRUMsT0FBSyxFQUFFLDRDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsdUJBRFQ7QUFFRUMsYUFBVyxFQUFFLGdIQUZmO0FBR0lDLE9BQUssRUFBRSx1QkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFxQixjQUFyQixFQUFxQyxLQUFyQyxDQUpWO0FBS0VDLFFBQU0sRUFBRSxzQ0FMVjtBQU1FQyxPQUFLLEVBQUUsd0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsYUFBVyxFQUFFLDhLQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsbUJBQVYsRUFBZ0MsWUFBaEMsRUFBOEMsS0FBOUMsQ0FKVjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLHlDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixFQXFDdEI7QUFDRU4sT0FBSyxFQUFFLHNCQURUO0FBRUVDLGFBQVcsRUFBRSw4SkFGZjtBQUdJQyxPQUFLLEVBQUUsbUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLGFBQVYsRUFBMEIsWUFBMUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUscURBTFY7QUFNRUMsT0FBSyxFQUFFLHFDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLHNCQURUO0FBRUVDLGFBQVcsRUFBQyw2S0FGZDtBQUdFQyxPQUFLLEVBQUUsa0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsY0FBRCxFQUFpQixZQUFqQixFQUFnQyxNQUFoQyxDQUpSO0FBS0VDLFFBQU0sRUFBRSxpREFMVjtBQU1FQyxPQUFLLEVBQUUsZ0ZBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E5Q3NCLEVBdUR0QjtBQUNFTixPQUFLLEVBQUUsd0JBRFQ7QUFFRUMsYUFBVyxFQUFDLHlIQUZkO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF5QixLQUF6QixDQUpSO0FBS0VDLFFBQU0sRUFBRSw4Q0FMVjtBQU1FQyxPQUFLLEVBQUUsdUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBZ0V0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUMsdUpBRmQ7QUFHRUMsT0FBSyxFQUFFLDRCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTJCLFFBQTNCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLE9BQUssRUFBRSxnRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWhFc0IsQ0FBakI7QUEyRUEsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDljOWE4MTQ1ZTAwY2ZmYzBkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdNb3ZpZSBXZXAgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJQbGF0YWZvcm1hIGluZm9ybWF0aXZhIGRlIHBlbGljdWxhcyBjb24gY29udGVuaWRvIGRpbmFtaWNvIHkgYXV0ZW50aWNhY2lvbiwgaGVjaGEgY29uIE5leHQgeSBTYW5pdHlcIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9tb3ZpZXMud2VicCcsXG4gICAgICB0YWdzOiBbJ05leHRqcycsICdTYW5pdHknICwgJ0FQSScsJ05leHRBdXRoJywgJ1RhaWx3aW5kY3NzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvcm1hbk9UL21vdmllJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vbW92aWUtam9ybWFub3QudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFY29tbWVyY2UgV2VwIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiUGxhdGFmb3JtYSB3ZWIgcGFyYSBjb21wcmFyIGVuIGxpbmVhIHByb2R1Y3RvcyB2YXJpYWRvcywgY29uIGNvbnRlbmlkbyBkaW5hbWljbywgY3JlYWRhIHVzYW5kbyBOZXh0anMgeSBTYW5pdHlcIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9lY29tbWVyY2Uud2VicCcsXG4gICAgICB0YWdzOiBbJ05leHRqcycsICdTYW5pdHknICwgJ0FQSSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3JtYW5PVC9lY29tbWVyY2UtYXBwJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZWNvbW1lcmNlLWFwcC1qb3JtYW5vdC52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NoYXJlZCBpbWFnZXMgd2ViIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiUGxhdGFmb3JtYSB3ZWIgY3V5YSBmaW5hbGlkYWQgZXMgY29tcGFydGlyIGZvdG9zLCBmb25kb3MsIHZpYWplcywgbHVnYXJlcywgZGVzYXJyb2xsYWRvIHVzYW5kbyBSZWFjdCB5IFNhbml0eS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9zaGFyZWRtZS53ZWJwJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnU2FuaXR5JyAsICdHb29nbGUgTG9naW4nLCAnQVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvcm1hbk9UL3NoYXJlZG1lJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vc3F1YXJlLWZyb3N0LTI5NjMub24uZmxlZWsuY28vJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRml0bmVzcyBXZXAgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBcGxpY2FjaW9uIHdlYiwgcGFyYSBtb3N0cmFyIGxvcyBkaWZlcmVudGVzIHRpcG9zIGRlIGVqZXJjaWNpb3MgcXVlIHNlIHB1ZWRlbiBhcGxpY2FyLCBwYXJhIGNyZWFyIHVuYSBzaW1wbGUgcnV0aW5hLCBhcHJvdmVjaGFuZG8gbGEgaW5mb3JtYWNpb24gb2J0ZW5pZGEgZGUgdW5hIEFQSSBleHRlcm5hXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvR1lNLndlYnAnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdzdHlsZWQtY29tcG9uZW50cycgLCAnSmF2YVNjcmlwdCcsICdBUEknXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vSm9ybWFuT1QvZml0bmVzcy1hcHAnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9icm9rZW4tYnJlZXplLTEwOTUub24uZmxlZWsuY28vJyxcbiAgICBpZDogMyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUmVhY3QgTmF0aXZlIFdlYiBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVzYW5kbyBSZWFjdCB5IFRhaWx3aW5kY3NzIHBhcmEgY3JlYXIgdW5hIGxhbmRpbmcgcGFnZXMgcXVlIHNpcnZhIGNvbW8gcHJlc2VudGFjaW9uIHBhcmEgZWwgZGlzZcOxbyByZWFsaXphZG8gY29uIFJlYWN0IE5hdGl2ZSBkZSBsYSBhcHAgZGUgTkZUcyBtYXJrZXRwbGFjZS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9ORlRzLndlYnAnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdUYWlsd2luZGNzcycgLCAnSmF2YVNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3JtYW5PVC9yZWFjdC1uYXRpdmUtdWktYXBwLXdlYicsXG4gICAgdmlzaXQ6ICdodHRwczovL2ZsYXQtaGF6ZS0yMzQ2Lm9uLmZsZWVrLmNvLycsXG4gICAgaWQ6IDQsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ05GVHMgTWFya2V0cGxhY2UgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjpcIkRpc2XDsW8gbGltcGlvIHkgZmx1aWRvLCBMYSBhcGxpY2FjacOzbiBjb250aWVuZSBkb3MgcGFudGFsbGFzLiBMYSBwcmltZXJhIHBhbnRhbGxhIGVudW1lcmEgdG9kb3MgbG9zIE5GVCwgbWllbnRyYXMgcXVlIGxhIHNlZ3VuZGEgbXVlc3RyYSBsb3MgZGV0YWxsZXMgZGUgdW4gTkZUIGVzcGVjw61maWNvLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9BUFAud2VicCcsXG4gICAgdGFnczogWydSZWFjdCBOYXRpdmUnLCAnSmF2YVNjcmlwdCcgLCAnRXhwbyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3JtYW5PVC9yZWFjdC1uYXRpdmUtdWktYXBwJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZXhwby5kZXYvQGpvcm1hbm90L2V4cG9DbGllbnQ/c2VydmljZVR5cGU9Y2xhc3NpYyZkaXN0cmlidXRpb249ZXhwby1nbycsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NpbXBsZSBSZWFjdCBNb3ZpZSBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOlwiQXBsaWNhY2lvbiB3ZWIgc2ltcGxlIHVzYW5kbyByZWFjdCwgcXVlIGZ1bmNpb25hIHBhcmEgY29uc3VsdGFyIGEgbGEgYmFzZSBkZSBkYXRvcyBkZSBvbURCIGxhIGluZm9ybWFjaW9uIGRlIHBlbGljdWxhcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvd2ViYXBwLndlYnAnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCcgLCAnQVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvcm1hbk9UL3NpbXBsZS1tb3ZpZS1hcHAnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9zaHJpbGwtc25vdy0zMjkwLm9uLmZsZWVrLmNvLycsXG4gICAgaWQ6IDYsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FQSSBWZW5lenVlbGEnLFxuICAgIGRlc2NyaXB0aW9uOlwiQVBJIGRvY3VtZW50YXRpdmEgc29icmUgVmVuZXp1ZWxhLCBlbnRyZWdhIGluZm9ybWFjaW9uIHJlbGV2YW50ZXMgYSBzdSBjdWx0dXJhLCByZWdpb25lcywgZmF1bmEsIGNvbWVyY2lvIHkgc2l0aW9zIGRlIGludGVyZXMsIGJhc2FkbyBlbiBzdXMgZXN0YWRvcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvQVBJLVZlbmV6dWVsYS53ZWJwJyxcbiAgICB0YWdzOiBbJ0V4cHJlc3MnLCAnSmF2YVNjcmlwdCcgLCAnTm9kZWpzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvcm1hbk9UL1ZlbmV6dWVsYUFQSScsXG4gICAgdmlzaXQ6ICdodHRwczovL3JhcGlkYXBpLmNvbS9qb3JtYW5vcnRlZ2EzNC1iOGJ4aGtsLW5BSy9hcGkvdmVuZXp1ZWxhLycsXG4gICAgaWQ6IDcsXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0VtcGV6w6kgZWwgdmlhamUgaGFjaWVuZG8gYm9vdGNhbXAgY29uIFBsYXR6aScsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ0N1bG1pbmUgZWwgYm9vdGNhbXAgZW4gUGxhdHppLCB5IGNvbnRpbnVlIGFkcXVpcmllbmRvIG3DoXMgY29ub2NpbWllbnRvIGRlIGZvcm1hIGF1dG9kaWRhY3RhJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnVHJhYmFqw6kgcG9yIHVuIHRpZW1wbyBjb21vIEZyZWVsYW5jZXInLCB9LFxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdBY3R1YWxtZW50ZSBzaWdvIGV4cGFuZGllbmRvIG1pIHN0YWNrIGRlIHRlY25vbG9naWFzLid9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9