# React Markdown

An awesome tool for markdown with both editor and preview component.

[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/surajpheudin/react-markdown">
    <img src="https://res.cloudinary.com/dd6bsxv1v/image/upload/v1663982343/markdown-react/markdown-react-logo_x2aftb.png" alt="Logo" height="120" style="object-fit: contain">
  </a>

  <h3 align="center">React Markdown</h3>

  <p align="center">
   A tool for using markdown in react.
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/surajpheudin/react-markdown/issues">Report Bug</a>
    ·
    <a href="https://github.com/surajpheudin/react-markdown/issues">Request Feature</a>
  </p>
</div>

## About The Project

![Product Name Screen Shot](https://res.cloudinary.com/dd6bsxv1v/image/upload/v1663986518/markdown-react/markdown-react-ss_q2jzvv.png)

There are many great markdown editor available on GitHub; however, this package provide you the enchance editor with three mode:

- Editor
- Preview
- Both

### Built With

- [![React][react.js]][react-url]
- [TSDX](https://tsdx.io/)

<!-- GETTING STARTED -->

## Getting Started

<!--
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g -->

<!-- ```` -->

### Installation

You can install this package with any node package manager of your choice.

```sh
npm install @surajpheudin/react-markdown
```

OR

```sh
yarn add @surajpheudin/react-markdown
```

<!-- USAGE EXAMPLES -->

## Usage

The **_Editor_** component gives you the access to editor, preview and split mode through toolbar.
To use it:

```sh
import React from "react";
import { Editor } from "@surajpheudin/react-markdown";

const MyForm = () => {
    const [value, setValue] = React.useState("");

    return (
        <form>
            <div style={{
                height: "400px",
              }}>
                <Editor
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                ></Editor>
            </div>
        </form>
    )
}
```

You can also use **_PreviewMarkdown_** for previewing raw markdown text.

```sh
import React from "react";
import { PreviewMarkdown } from "@surajpheudin/react-markdown";

const MyForm = () => {
    const someMarkdown = "# A demo of `react-markdown` \n
`react-markdown` is a markdown component for React.";

    return (
        <form>
            <div style={{
                height: "400px",
              }}>
                <PreviewMarkdown>
                    {someMarkdown}
                </PreviewMarkdown>
            </div>
        </form>
    )
}
```

_For more examples, please refer to the [Documentation](https://github.com/surajpheudin/react-markdown)_

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License.

 <!-- See `LICENSE.txt` for more information. -->

<!-- CONTACT -->

## Contact

Your Name - [@surajpheudin](https://twitter.com/surajpheudin) - pheudinsuraj@gmail.com

Project Link: [https://github.com/surajpheudin/react-markdown](https://github.com/surajpheudin/react-markdown)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

We really appreciate the help and guidlines.

- [Choose an Open Source License](https://choosealicense.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/surajpheudin/react-markdown/blob/main/LICENSE
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
