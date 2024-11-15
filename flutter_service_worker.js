'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7572471c43892103a29635f33fa14f08",
".git/config": "82d6252ba42d0b58915c1943aebe8ef7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a6186e1237f8155c5d8169245fb83575",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "38154bb74bf076cf6427b15eeab3d9ba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5581e386e98e833a1afc992da2143468",
".git/logs/refs/heads/main": "5581e386e98e833a1afc992da2143468",
".git/logs/refs/remotes/origin/HEAD": "6ed2ad14f228d82b8aa01eae4bbd314a",
".git/logs/refs/remotes/origin/main": "c30f0fce73af23e6ad9da7698cda172b",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/4e00106569c65dbac955daa5bc84f0c5215860": "797829cc4276a096e8512216b457bed5",
".git/objects/04/cc09ddba3f850e8a59b6b6c90f2bcf8cf5eaa7": "84c12afe45fbbccd3d0c51a19dad4343",
".git/objects/07/bb285c02c0eb079d4eddefc32c965efafe7056": "72e63ac93e9f9c6efbab6be002d329dd",
".git/objects/08/69f1ca301f644faafcb4a5299d664316cb28c9": "36400df00107096eac77749471e93ee2",
".git/objects/0d/d5682d70b6c04e90cbc059346e4f1cb7feea65": "4a99fa9da4f37860496d0991c96ef3ff",
".git/objects/0f/ebb4d2ab8ffaf581e297be1eccb04e16ef5ad1": "4b504f281ffe9b2c5933afec34c57b49",
".git/objects/1a/9195d6f4db5c3cb4b1cc101b848b2e6ce40879": "a88d555fe8ef3159304be04c8217d58d",
".git/objects/1a/fcb7539e8da3ce2d6434c6437330d694818c51": "ba983b62ccdb22db9c2e052e36f68223",
".git/objects/1c/8f621a8c024c49cc1dc737adfdcb785e13f037": "555aad221d9e312f6cfeea8fd4638232",
".git/objects/1e/261ea37432bf43d517546dab973fb925484090": "ca9c3dd6f9d6ef0980b9ee192265105e",
".git/objects/2b/6abfc5148efd43b1fb528a8178ab7e7b3277c9": "bf030b9cca70529396de036557305229",
".git/objects/2b/e01e841aa7b702996a0576709e01d8d50ff67f": "5846e7beee3e31f98d6ccc2d5256bc25",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/ce2b89e6b39b2c42803884e5ce4f20cb37d0b6": "f96f4c728cff0d34e48507d0b8ede57c",
".git/objects/33/d4371ad7cfae33b22c2ecc5d9e15dbb2cc13b5": "a83948659f69e96bfd44257ed9c13dff",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/677da548136e28a1371fe14059327973d1788a": "016107ba3c89359776ee8f2a4219b172",
".git/objects/42/1e42b3e6393e140ab44c9e3b2b606844985d25": "bf1407a163dbcf98c6e78aee368c368f",
".git/objects/43/0112a102d5146e297bd5759c0f57cd0f65ce29": "530c0b6e2bb0d7255de0fa087d68abd0",
".git/objects/4b/e4a029f481d65acc259e0e23b36d9b4019953f": "e31a65dcdf60603881e2f5e856f8444e",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/51/4ddab0f5e8db22361a61afc6758b03f6e0f75e": "c6ae2198f875bab556823a9108a3ca1a",
".git/objects/53/d3f0b7fe5fbc6b8eb2c640b040d02dd840f90c": "24aa3880801b6b384d4a741c1c878dc8",
".git/objects/5c/9cff598081db009c8445dc4d45fa9065430f5c": "1f090bef87f71678b602324ef0e96da9",
".git/objects/60/6163d6bddd76d64d6301d49d463e439dc12554": "f9a65d00edef1102eed5eb99227d2d5a",
".git/objects/67/3e99ff7dbd9104cdae3ebac405617bd447b264": "5101cbe68bd141fcf382f2fa02951c8d",
".git/objects/6a/2eb60ee81fe53182842d0fe8461d8cc0e66e9c": "ccb97025d77426868c3c1e83b7011a39",
".git/objects/6a/71630b1f822777474272c994876683f5d9e9f6": "69d6a48b2539d02ea5b2cf6b9457a8e9",
".git/objects/6b/8a2cfd729cc22afde73d92a09c9a6ab9f8cb7f": "0ae94ed9f07269ca73f821c67729b6de",
".git/objects/6c/fb4c2bb0232565f3b3f38ecfabfaece18350e4": "c3ffceb567c0aea960437de6ba0b10d9",
".git/objects/75/85d38e5e9eb41ec6025110b815c82a37639a47": "0272cc34d285e106fc957f0f72a11fc2",
".git/objects/76/7f2b2089b5f49368600083e37ae91bd8ef5cf5": "ef47283e2357fd95b952889bf4332e85",
".git/objects/7b/8854f7d3c2c7698293fbb1cc87f36d301ba811": "bbf04861d6cb574673a8393cd0c1234f",
".git/objects/7d/dbf564cedc828497feef2f43b4f1b6f3e611d6": "a2dfc7dc93d5e8ea751be98c05bc25f1",
".git/objects/81/1c216fe66a7d9a78b746583204407ec260a152": "05d208aba4fe420b37777c6094129626",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/52156fa755058244ea59a733f13ec5d6e71bb6": "5e8221a6ae931265fa33b7ecff170026",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4e0b0d54d02eb96d4a3eccd33a7d248e286aaa": "96956b832786cefec5da5a6a226c06c0",
".git/objects/94/331a437b773c0c54ce4cf688a62d1ccda65213": "e7899d6176135c461b6ebdb9490317a1",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9d/1e12c2c60232e6f8432be578bfb7621f63c307": "d09cad4725ad77659eb2613ff234784d",
".git/objects/9f/cccdeaa0250da6b6bed354c73f78cc1a0270b2": "ddc0588d433b32c2efbe337714c690f7",
".git/objects/a2/dc009f691a71b2fb3453f2c31531a1d05e7ad8": "1dc123223af3d97921788efd3d403d46",
".git/objects/a5/2ef3991b285be7312f829d74408983b7aec3d5": "c8545eb9e2ba7ed0d74fe33e5f4b0935",
".git/objects/a7/e440f74f691f8406b2342ebe14d494542640b1": "97f50fff962fadbaa74112f5a915ff02",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/c24dd74ee59cd083497fea69ad5190cf7d61e6": "024dd13584ed35898c4f6744489cc8cb",
".git/objects/a9/b78b8f0945c610a52ec4f878d929e777786f2c": "9a88176e05e818b0b1560d3dcc245c6d",
".git/objects/ac/4881508dc344f8a6b54d81c7fa22faad949bba": "2e0fc1dc279d67423e2f02b510bf909e",
".git/objects/b4/d377a836ea7c00ad28746294777fbcdf27ec35": "382de386256973264af7b126e338643a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bfc9e07e2e2a08f7de8637fd8a98191f8c1e1b": "64cf3af9312c461e5480fb6590c4a2d1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/4f58c970bfb1c83ccdcdb6d40a8c3e1633d4df": "372313a666c11826d305cc7f187e09a8",
".git/objects/c2/ae97c5c8baa040a458477cb317604c88486bf7": "80cc359a79ea34d76ac041991a345651",
".git/objects/c3/75b545d3c3b0d7fee843cd2e07ecbbff5bdb9b": "6371fbe91f859af3dd79080a3d3697d0",
".git/objects/c8/85215de95c7277468cec1da4eeb269f834ced7": "4a46f6b9f527a48f9eef310596451bc6",
".git/objects/c9/40185aec4dc758286c5c9285d27776f6ac6092": "70b46f461122d7df873011ba2f9af271",
".git/objects/cd/016e4ba30d0736d5e0f58425640114c6d50867": "e994f9c06244276bafecbc3cdce6d0e0",
".git/objects/d3/14bd4ad119e307ff38c27992dfad4825365ec4": "f656f83c2ae0366b62d3f10c3a996f1c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/12a7f5b0ab229854fe6a00c889ba7afb8c8706": "1bb92391b6f6abb5864934d8acdde2f2",
".git/objects/e8/02486dfb993ec39ecdd8c127caffe4feb73f04": "64f4e194a46269da4cc9de795eae044f",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f8/eb1a772ed8b3d4672859e42b002b1f6d59e2a2": "8f1b468569f0753f58bf2ea421b5ccd5",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/fa785366515bb20ae0f6dcc12448953fc9b665": "408096d408b7db9ee4461582bc43be35",
".git/objects/ff/1a3c0d134bd72d1db2c1ff12b9a4849cebcf41": "6c23ff2a11c8e0c41d7410a9323fd234",
".git/ORIG_HEAD": "e97c88e2eb86fa13c70cb9ed7c552062",
".git/packed-refs": "3a96c6b7a3dd23ffd24fa9a8d2a3c618",
".git/refs/heads/main": "6c6650681ad2a1a5e329ed1354d747e9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6c6650681ad2a1a5e329ed1354d747e9",
"assets/AssetManifest.bin": "f3ce1d356f34f56f2dfe97e430d1a396",
"assets/AssetManifest.json": "d18d98d9e2c5ee0d5fa8a2ff282c109f",
"assets/assets/fonts/Pretendard-Black.otf": "6bc3f501ba4e736b706074a29826ec0a",
"assets/assets/fonts/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/fonts/Pretendard-ExtraBold.otf": "dac19e30ed93b7aed171830c38cda6a2",
"assets/assets/fonts/Pretendard-ExtraLight.otf": "23002daa2dee07f8a652bb0ab06af079",
"assets/assets/fonts/Pretendard-Light.otf": "aef3dc5f5592a0a9bfd7e8de7abdc2c5",
"assets/assets/fonts/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/fonts/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/fonts/Pretendard-SemiBold.otf": "d9d912f2630bae445757f4769271c35c",
"assets/assets/fonts/Pretendard-Thin.otf": "0b09a12c024a6380cd40dbfaf2fd79cd",
"assets/assets/icons/down.svg": "f9b63c87393de1ddd862e967d410e32d",
"assets/assets/icons/home.svg": "bbf316e595ff1afafa8e6bc9eac0bd37",
"assets/assets/icons/suggest.svg": "59479db9aa71de618ba7342242204965",
"assets/FontManifest.json": "bef31c72274963524f3768ac0ea586c7",
"assets/fonts/MaterialIcons-Regular.otf": "3f8fa1d265574792bc7ba85832794f74",
"assets/NOTICES": "4ffce0ef0b16ca4e1a7c4dc7e88a31f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4707f3b30abce8ef54ada8ee421e209e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "036ee4f5647a0d0846b9b15db4fc38d3",
"/": "036ee4f5647a0d0846b9b15db4fc38d3",
"main.dart.js": "86223f5d26b99cb5d5fe351ee0433446",
"manifest.json": "eb7b3b663c9d6b3b374c56cdc4ddd446",
"version.json": "96940379d944a1b894078874ce85ddf3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
