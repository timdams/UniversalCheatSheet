var version = {
  build: 0,
  major: 2,
  minor: 0,
  revision: 0
};

var modules = {
  main: {
    name: 'Main Languages',
    info: 'Universal Languages used for PC',
    content: {
      CPP: {
        id: 'CPP',
        abbr: 'C++',
        displayname: 'C++',
        path: 'langs/main/cpp.json',
        defaultPrism: "lang-cpp",
        enabled: true
      },
      CS: {
        id: 'CS',
        abbr: 'C#',
        displayname: 'C#',
        path: 'langs/main/cs.json',
        defaultPrism: "lang-csharp",
        enabled: true
      }
    }
  },
  web: {
    name: 'Web Languages',
    info: 'Web Languages used for Online Development',
    content: {
      HTML: {
        id: 'HTML',
        abbr: 'HTML',
        displayname: 'HTML',
        path: 'langs/web/html.json',
        defaultPrism: "lang-html",
        enabled: true
      },
      CSS: {
        id: 'CSS',
        abbr: 'CSS',
        displayname: 'CSS',
        path: 'langs/web/css.json',
        defaultPrism: "lang-scss",
        enabled: true
      }
    }
  }
};

var content = [
  {
    name: "C++",
    path: "langs/main/cpp.json",
    prism: "language-cpp",
    enabled: true
  },
  {
    name: "C#",
    path: "langs/main/cs.json",
    prism: "language-csharp",
    enabled: false
  },
  {
    name: "JAVA",
    path: "langs/main/java.json",
    prism: "language-java",
    enabled: false
  },
  {
    name: "Python",
    path: "langs/main/py.json",
    prism: "language-python",
    enabled: true
  },
  {
    name: "Arduino",
    path: "langs/main/ard.json",
    prism: "language-arduino",
    enabled: true
  },
  {
    name: "Bash",
    path: "langs/main/sh.json",
    prism: "language-bash",
    enabled: true
  },
  {
    name: "OpenGL",
    path: "langs/API/gl.json",
    prism: "language-cpp",
    enabled: false
  },
  {
    name: "UE4 API",
    path: "langs/API/ue4.json",
    prism: "language-cpp",
    enabled: false
  },
  {
    name: "UNITY API",
    path: "langs/API/unity.json",
    prism: "language-csharp",
    enabled: false
  },
  {
    name: "Design Patterns",
    path: "langs/etc/dp.json",
    prism: "language-cpp",
    enabled: false
  },
  {
    name: "GIT",
    path: "langs/etc/git.json",
    prism: "language-git",
    enabled: true
  },
  {
    name: "MOBILE Development",
    path: "langs/etc/mobile.json",
    prism: "language-java",
    enabled: false
  },
  {
    name: "Usefull Sites",
    path: "langs/etc/US.json",
    prism: "lang-html",
    enabled: false
  },
  {
    name: "JSON",
    path: "langs/data/json.json",
    prism: "lang-json",
    enabled: false
  },
  {
    name: "XML",
    path: "langs/data/xml.json",
    prism: "lang-xml",
    enabled: false
  },
  {
    name: "XAML",
    path: "langs/data/wpf.json",
    prism: "lang-html",
    enabled: false
  },
  {
    name: "HTML",
    path: "langs/web/html.json",
    prism: "lang-html",
    enabled: true
  },
  {
    name: "SCSS",
    path: "langs/web/css.json",
    prism: "lang-scss",
    enabled: true
  },
  {
    name: "Javascript",
    path: "langs/web/js.json",
    prism: "language-js",
    enabled: true
  },
  {
    name: "Typescript",
    path: "langs/web/ts.json",
    prism: "language-typescript",
    enabled: false
  }
];