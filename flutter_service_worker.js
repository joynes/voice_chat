'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "205696365baa4a7ba067ce2f0a888611",
"index.html": "13beba2c2a6e3a7829eebf01c81dfbd5",
"/": "13beba2c2a6e3a7829eebf01c81dfbd5",
"main.dart.js": "b88c07da401d1e47243fff15f3b7afe3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4ab05d1858e87324dd731b561a94dbf9",
".git/config": "abbeb1dd75c61e35fa3f320ee9191c1f",
".git/objects/92/a5e5547e03c35ab343e336e80ba7fc2a94c943": "8b83c4a32e078c89f978e526becc1536",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/a67ddaea77fe7c81859801265411f9f53277cf": "646a6b9692b5d1baf2bf47ab34cef093",
".git/objects/9e/be7267298acaba852925fb68a901c238c80f7f": "8eb4016cc45857e03495570026f0c1e8",
".git/objects/35/2fb97a7bcce03fbde7df4c82a0b8024394caac": "1cc575bb7c78a71074e40bd171bd361a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/287a6e0cf5eee9242f30114dc3c08b47e2398a": "1a89121d2076f1ccad568afacd49ca7e",
".git/objects/67/f57f2203f8b18ab5c8c2e099f986341fa96c9b": "9a300875c665c16a4bcbd57b59b0fc13",
".git/objects/67/e476e94060c1f36a88cd4379aa4b6df5eef3e0": "61ad91eca37ee49a684b3b80fe4fdf32",
".git/objects/94/a2c3eb2abd3bfbbf79c7cfc38f8b6796bbfc70": "e70b34ef6649a3bee438e2aafe5b5b59",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/b95b4c8c596961a506e2ea30eb0deb5ff3b4eb": "2966a7b2dfc075107c11bcd9775d2500",
".git/objects/05/bcd63373a3f944cebbe14a72b31ac747e87a8d": "883cfd8d8ff74cee98bf3b85979c25cd",
".git/objects/9d/362425a5d663470bd9b611368275d93e5925c0": "6eda2df1b92416930608e1300d74e848",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/4553f9799afbab6559558e1d280dc2793bc78f": "f76bb0844a22e98f30b68fbd19fabe84",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/88ddc7a5e0d8648b11d6a0d6eb41eea072ef8c": "412de4d959643a83792f33dd84858148",
".git/objects/d7/54a39d9a50c5da65dbbbf2ce41c2cc1bd00ce4": "a9ae9fadd8ed4880ea771fefa0e1307f",
".git/objects/d0/3390452e213fdad2f2a5a97eb64b09f3bda4e2": "a3020934cbbb7cf15fd0cbbb551d6084",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/4b70329c2bd212da02c2692dcb2cd15c358e22": "4b08807418bfc8c3ae9063c53c532a42",
".git/objects/b4/dfe75af79fe2444598c479beb535123caf3abf": "0bb26710a8bf12603440c4818d7028c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8c60a9d4c574779f0fc186f4afd4e13bebb2db": "928985380292215bef8f02751cafa397",
".git/objects/f3/f062b7dfebe02df28f05ea9d501872d32e7597": "39858854e1b4c098d952215fc3c09521",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f4a2d21428ed52bbbd59d9eb76122b48d41ae8": "0c35e5a14dc4ba03216dcb1e3031bd12",
".git/objects/fc/235aa1d07160b298fd6dabb759bdb3f0326d74": "57e932a643a8488159ad5b16c8a651ec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/11384ab0b8bbe68d9ed2c68ebe18764335a2d5": "2df239972b7da186860570c957a25289",
".git/objects/c1/43e924b7e71a3e9ac32d88e6e8a4664ecbcc8b": "9643637a7fbb9708bee2fc51c19c2bc7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/ca3fa88ded37a80b027fcdb88cf3fa21bcfda7": "cf12149bcdd696ad3ed6931b3fa240d3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/0b62ab06488353d22dae43e740e55b86129e43": "2ca1084e4b2c10b3a81c770b1cdc8f3f",
".git/objects/73/5668f394808621d85c8bfa1945cd72268f76ed": "49be528cd171685324f60cd8238bf397",
".git/objects/1a/b7a3d6c309028e3701bd9f8a6c9fabb0f9c517": "74612991b66cdeabcc2aa4385c1f0950",
".git/objects/7b/0b56196a093f932ae23d4d1d6ea15129e59f32": "e1ab689fb58c3d5647c1ad7dd15d23aa",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/fea4b204e1dc44ee1f9381a030ad63272793f6": "e68c564f7cc86e84fb8c1890ad6faa9e",
".git/objects/43/686cd2816ba498553fbb0ae9bdd3932d0c7cf3": "bf1eb3070f6a47c60889dc666d9264a2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/fa760caf33ee43c64f3020c9f91eeddb480f0d": "f33be6623e7ff434558150d19c33483a",
".git/objects/07/ef4de8041ecb44113c559013bdfbb29ce06b9b": "39908a73b787eb3d1487b4acbb98a5c6",
".git/objects/07/f7c0bb19b41b7d2f364b4d08ace50e6561d2ed": "8764c5b1c83a121585cc3d03e896df07",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/36/efe630c0954e1e5ff1666f008a441f038b4c66": "55a2082a96c6b490fbf8fc1c45fb7ab6",
".git/objects/5c/271573d961efc11cbfba347840eb932121428f": "cc1bf4f428abb9195f20215be013e957",
".git/objects/5d/453b4c28e7b12fd71c1c61a9bed926adaedf9b": "3f4db9dcf6ceaf8b021a35430e19c9f9",
".git/objects/62/e90ca872a289da7a7ec7af3b51334f89e97ae8": "c5dca58e9be4d64da204e7a5764c87bc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/2642cefb102294d1eddf988dea1166b905d65e": "b8fc9e42c9fca4f7b3babfb6c9eeed30",
".git/objects/37/8b632d3db505576069b0969d9bcc321200b58c": "cc5d4efea5b8086c9a84b78347a9cd2a",
".git/objects/39/c314a7941052c126981cb8198a674e4acc11f5": "0393c7f5551570ade40ecdc284ebe82e",
".git/objects/97/19b6c0faf2287c7981aed97f3da5cb4c135dfc": "b2471ec959522e9a6ec0aad3f9b17dc6",
".git/objects/97/7e6bb458b3cd4851e81f1c600243589b339f7d": "dc530d55b016c7adce6774276a95b240",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/f8ba107b73b9c5096613900d107b899e3362e9": "2e3969880f6086caf1da516c3d6e20b5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3cfcb6c0491cc2e4254acbd4b2291bbf7b7273": "dc3281ff1474a5991c442f620757d67e",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/e479c3551b3e299ccaa9ac187b36165a5cb5cb": "b284672414f2f13de91d0ed2f2e660ee",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/c160a6dfa95d1dcbded6b17584a7b3a6a76513": "6f88095be9d0a16f178e7edf6e281e07",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/d9cd8f16688a00c63783b5cf743b067e344ccb": "4208d6ee1821e25342c7c0b0601192d6",
".git/objects/e7/999a9aff1a4e355d2c3e3839b743265df04d37": "2df1afb86c192369e971817b51e1f1e1",
".git/objects/e0/398caec1906c432960ffd8d78c6e9b0225863f": "1758262bae38f49b6d1c1f9d5c0fc4d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/013601137004d930d2d5ce3eb865f11ccdf5a3": "7a192c9a9e97225eae1ce57ea53b434f",
".git/objects/70/1cd14ebd90124dcd8704cd27c61b55571882c0": "4e9633b756fdf5bbec4a452fac96ec8b",
".git/objects/1e/7efd8a03f66a5baced64857311c6210f3c912d": "30b3c9a0a7c0051ab167776495006777",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/195cfee13b872051d4554f7d6758cafa05119f": "6b5024d8fcd3eed4b46c63c3f6423ac4",
".git/objects/4f/6c82e2efd727cae2f6342c6c2d3e1bb952ffb4": "780c75900ad61dc5d92f1695134e1ec8",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2e/c7f969e4c64fc67619a333a2836e9f780cda91": "a740505e1497cdd4086cd3afe4254662",
".git/objects/7f/493e26da5fcd8d9f3d5d1802cd881c8be37fa8": "ffa4e8a7f1072b25cd3ed1cbe065a412",
".git/objects/8e/8accf105b76e2dd99541f9411d34f398a42489": "bb3af5f87ac4e016391042127d7eebe3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fcb56cd9c582a3b34023d7d7a218a7e2",
".git/logs/refs/heads/master": "fcb56cd9c582a3b34023d7d7a218a7e2",
".git/logs/refs/remotes/origin/main": "1b1525d35153fc9ee14b30bae18ad4bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "4d162a13c5ce5952a41dc1f9d51e8c4c",
".git/refs/remotes/origin/main": "4d162a13c5ce5952a41dc1f9d51e8c4c",
".git/index": "93bd4258a74ada76763ea457a76c6701",
".git/COMMIT_EDITMSG": "6df58640edaeb32c9071e64fa87a641f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "7f27af34ca851bb2ae770478e02b17d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "c22a979cab42d0ddde5f5197cf3f1222",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
