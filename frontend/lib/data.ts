const dummyData = {
  id: "1",
  name: "Project",
  type: "folder",
  path: "/",
  isCollapsed: true,
  children: [
    {
      id: "2",
      name: "index.js",
      type: "file",
      language: "javascript",
      path: "/index.js",
      content: "console.log('Hello, World!');",
    },
    {
      id: "3",
      name: "src",
      type: "folder",
      path: "/src",
      isCollapsed: false,
      children: [
        {
          id: "4",
          name: "App.js",
          type: "file",
          language: "javascript",
          path: "/src/App.js",
          content: "import React from 'react';",
        },
        {
          id: "5",
          name: "components",
          type: "folder",
          path: "/src/components",
          isCollapsed: false,
          children: [
            {
              id: "6",
              name: "Button.js",
              type: "file",
              language: "javascript",
              path: "/src/components/Button.js",
              content: "import React from 'react';",
            },
          ],
        },
      ],
    },
  ],
};
export default dummyData;
