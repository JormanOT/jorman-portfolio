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
  title: 'Movies Wep App',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSxxR0FGZjtBQUdJQyxPQUFLLEVBQUUscUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBc0IsS0FBdEIsRUFBNEIsVUFBNUIsRUFBd0MsYUFBeEMsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsbUNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxtQkFEVDtBQUVFQyxhQUFXLEVBQUUsZ0hBRmY7QUFHSUMsT0FBSyxFQUFFLHdCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXNCLEtBQXRCLENBSlY7QUFLRUMsUUFBTSxFQUFFLDJDQUxWO0FBTUVDLE9BQUssRUFBRSw0Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLHVCQURUO0FBRUVDLGFBQVcsRUFBRSxnSEFGZjtBQUdJQyxPQUFLLEVBQUUsdUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBcUIsY0FBckIsRUFBcUMsS0FBckMsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsc0NBTFY7QUFNRUMsT0FBSyxFQUFFLHdDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSw4S0FGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLG1CQUFWLEVBQWdDLFlBQWhDLEVBQThDLEtBQTlDLENBSlY7QUFLRUMsUUFBTSxFQUFFLHlDQUxWO0FBTUVDLE9BQUssRUFBRSx5Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsRUFxQ3RCO0FBQ0VOLE9BQUssRUFBRSxzQkFEVDtBQUVFQyxhQUFXLEVBQUUsOEpBRmY7QUFHSUMsT0FBSyxFQUFFLG1CQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxhQUFWLEVBQTBCLFlBQTFCLENBSlY7QUFLRUMsUUFBTSxFQUFFLHFEQUxWO0FBTUVDLE9BQUssRUFBRSxxQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXJDc0IsRUE4Q3RCO0FBQ0VOLE9BQUssRUFBRSxzQkFEVDtBQUVFQyxhQUFXLEVBQUMsNktBRmQ7QUFHRUMsT0FBSyxFQUFFLGtCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLGNBQUQsRUFBaUIsWUFBakIsRUFBZ0MsTUFBaEMsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsaURBTFY7QUFNRUMsT0FBSyxFQUFFLGdGQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixFQXVEdEI7QUFDRU4sT0FBSyxFQUFFLHdCQURUO0FBRUVDLGFBQVcsRUFBQyx5SEFGZDtBQUdFQyxPQUFLLEVBQUUscUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBeUIsS0FBekIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsT0FBSyxFQUFFLHVDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBdkRzQixFQWdFdEI7QUFDRU4sT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFDLHVKQUZkO0FBR0VDLE9BQUssRUFBRSw0QkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEyQixRQUEzQixDQUpSO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsZ0VBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FoRXNCLENBQWpCO0FBMkVBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzJmZDMxODkwOTRkYzI1YWJlMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnTW92aWVzIFdlcCBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBsYXRhZm9ybWEgaW5mb3JtYXRpdmEgZGUgcGVsaWN1bGFzIGNvbiBjb250ZW5pZG8gZGluYW1pY28geSBhdXRlbnRpY2FjaW9uLCBoZWNoYSBjb24gTmV4dCB5IFNhbml0eVwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL21vdmllcy53ZWJwJyxcbiAgICAgIHRhZ3M6IFsnTmV4dGpzJywgJ1Nhbml0eScgLCAnQVBJJywnTmV4dEF1dGgnLCAnVGFpbHdpbmRjc3MnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vSm9ybWFuT1QvbW92aWUnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9tb3ZpZS1qb3JtYW5vdC52ZXJjZWwuYXBwLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Vjb21tZXJjZSBXZXAgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJQbGF0YWZvcm1hIHdlYiBwYXJhIGNvbXByYXIgZW4gbGluZWEgcHJvZHVjdG9zIHZhcmlhZG9zLCBjb24gY29udGVuaWRvIGRpbmFtaWNvLCBjcmVhZGEgdXNhbmRvIE5leHRqcyB5IFNhbml0eVwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Vjb21tZXJjZS53ZWJwJyxcbiAgICAgIHRhZ3M6IFsnTmV4dGpzJywgJ1Nhbml0eScgLCAnQVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvcm1hbk9UL2Vjb21tZXJjZS1hcHAnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9lY29tbWVyY2UtYXBwLWpvcm1hbm90LnZlcmNlbC5hcHAvJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2hhcmVkIGltYWdlcyB3ZWIgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJQbGF0YWZvcm1hIHdlYiBjdXlhIGZpbmFsaWRhZCBlcyBjb21wYXJ0aXIgZm90b3MsIGZvbmRvcywgdmlhamVzLCBsdWdhcmVzLCBkZXNhcnJvbGxhZG8gdXNhbmRvIFJlYWN0IHkgU2FuaXR5LlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3NoYXJlZG1lLndlYnAnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdTYW5pdHknICwgJ0dvb2dsZSBMb2dpbicsICdBUEknXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vSm9ybWFuT1Qvc2hhcmVkbWUnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9zcXVhcmUtZnJvc3QtMjk2My5vbi5mbGVlay5jby8nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGaXRuZXNzIFdlcCBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwbGljYWNpb24gd2ViLCBwYXJhIG1vc3RyYXIgbG9zIGRpZmVyZW50ZXMgdGlwb3MgZGUgZWplcmNpY2lvcyBxdWUgc2UgcHVlZGVuIGFwbGljYXIsIHBhcmEgY3JlYXIgdW5hIHNpbXBsZSBydXRpbmEsIGFwcm92ZWNoYW5kbyBsYSBpbmZvcm1hY2lvbiBvYnRlbmlkYSBkZSB1bmEgQVBJIGV4dGVybmFcIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9HWU0ud2VicCcsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ3N0eWxlZC1jb21wb25lbnRzJyAsICdKYXZhU2NyaXB0JywgJ0FQSSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3JtYW5PVC9maXRuZXNzLWFwcCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2Jyb2tlbi1icmVlemUtMTA5NS5vbi5mbGVlay5jby8nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSZWFjdCBOYXRpdmUgV2ViIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiVXNhbmRvIFJlYWN0IHkgVGFpbHdpbmRjc3MgcGFyYSBjcmVhciB1bmEgbGFuZGluZyBwYWdlcyBxdWUgc2lydmEgY29tbyBwcmVzZW50YWNpb24gcGFyYSBlbCBkaXNlw7FvIHJlYWxpemFkbyBjb24gUmVhY3QgTmF0aXZlIGRlIGxhIGFwcCBkZSBORlRzIG1hcmtldHBsYWNlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL05GVHMud2VicCcsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ1RhaWx3aW5kY3NzJyAsICdKYXZhU2NyaXB0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvcm1hbk9UL3JlYWN0LW5hdGl2ZS11aS1hcHAtd2ViJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZmxhdC1oYXplLTIzNDYub24uZmxlZWsuY28vJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTkZUcyBNYXJrZXRwbGFjZSBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOlwiRGlzZcOxbyBsaW1waW8geSBmbHVpZG8sIExhIGFwbGljYWNpw7NuIGNvbnRpZW5lIGRvcyBwYW50YWxsYXMuIExhIHByaW1lcmEgcGFudGFsbGEgZW51bWVyYSB0b2RvcyBsb3MgTkZULCBtaWVudHJhcyBxdWUgbGEgc2VndW5kYSBtdWVzdHJhIGxvcyBkZXRhbGxlcyBkZSB1biBORlQgZXNwZWPDrWZpY28uXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL0FQUC53ZWJwJyxcbiAgICB0YWdzOiBbJ1JlYWN0IE5hdGl2ZScsICdKYXZhU2NyaXB0JyAsICdFeHBvJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvcm1hbk9UL3JlYWN0LW5hdGl2ZS11aS1hcHAnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9leHBvLmRldi9Aam9ybWFub3QvZXhwb0NsaWVudD9zZXJ2aWNlVHlwZT1jbGFzc2ljJmRpc3RyaWJ1dGlvbj1leHBvLWdvJyxcbiAgICBpZDogNSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2ltcGxlIFJlYWN0IE1vdmllIEFwcCcsXG4gICAgZGVzY3JpcHRpb246XCJBcGxpY2FjaW9uIHdlYiBzaW1wbGUgdXNhbmRvIHJlYWN0LCBxdWUgZnVuY2lvbmEgcGFyYSBjb25zdWx0YXIgYSBsYSBiYXNlIGRlIGRhdG9zIGRlIG9tREIgbGEgaW5mb3JtYWNpb24gZGUgcGVsaWN1bGFzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy93ZWJhcHAud2VicCcsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0JyAsICdBUEknXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vSm9ybWFuT1Qvc2ltcGxlLW1vdmllLWFwcCcsXG4gICAgdmlzaXQ6ICdodHRwczovL3NocmlsbC1zbm93LTMyOTAub24uZmxlZWsuY28vJyxcbiAgICBpZDogNixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQVBJIFZlbmV6dWVsYScsXG4gICAgZGVzY3JpcHRpb246XCJBUEkgZG9jdW1lbnRhdGl2YSBzb2JyZSBWZW5lenVlbGEsIGVudHJlZ2EgaW5mb3JtYWNpb24gcmVsZXZhbnRlcyBhIHN1IGN1bHR1cmEsIHJlZ2lvbmVzLCBmYXVuYSwgY29tZXJjaW8geSBzaXRpb3MgZGUgaW50ZXJlcywgYmFzYWRvIGVuIHN1cyBlc3RhZG9zLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9BUEktVmVuZXp1ZWxhLndlYnAnLFxuICAgIHRhZ3M6IFsnRXhwcmVzcycsICdKYXZhU2NyaXB0JyAsICdOb2RlanMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vSm9ybWFuT1QvVmVuZXp1ZWxhQVBJJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcmFwaWRhcGkuY29tL2pvcm1hbm9ydGVnYTM0LWI4Ynhoa2wtbkFLL2FwaS92ZW5lenVlbGEvJyxcbiAgICBpZDogNyxcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRW1wZXrDqSBlbCB2aWFqZSBoYWNpZW5kbyBib290Y2FtcCBjb24gUGxhdHppJywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnQ3VsbWluZSBlbCBib290Y2FtcCBlbiBQbGF0emksIHkgY29udGludWUgYWRxdWlyaWVuZG8gbcOhcyBjb25vY2ltaWVudG8gZGUgZm9ybWEgYXV0b2RpZGFjdGEnLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdUcmFiYWrDqSBwb3IgdW4gdGllbXBvIGNvbW8gRnJlZWxhbmNlcicsIH0sXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJ0FjdHVhbG1lbnRlIHNpZ28gZXhwYW5kaWVuZG8gbWkgc3RhY2sgZGUgdGVjbm9sb2dpYXMuJ30sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=