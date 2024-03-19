# Welcome to Chamalspace!

A react portfolio made using bleeding edge Javascript runtime engine [BunJS](https://bun.sh/) with the help of [ViteJS](https://vitejs.dev/).

> Visit the live link - [chamalspace.vercel.app](chamalspace.vercel.app)

## Preview

![chamalspace portfolio!](/assets/images/imagePreview.png "chamalspace preview")

## Technolegies used

* Vite
* React (JSX)
* CSS
* BunJS
* MUI library
* EMailJS
* Axios
* GitHub REST API
* Vercel
* eslint

## How to run and build yourself

1: Clone the repo <br><br>
`git clone https://github.com/Chamal1120/ChamalSpace` <br><br>
2: Install dependancies <br><br>
`bun install`<br><br>
3: Create a .env file in the root directory for the secrets. (Take below template for the .env file) <br><br>

    # Github API Key
    
    VITE_GITHUB_API_KEY = YouKey

    # EmailJS keys

    VITE_EMAILJS_SERVICE_ID = Yourkey
    VITE_EMAILJS_TEMPLATE_ID = YourKey
    VITE_EMAILJS_PUBLIC_KEY = YourKey
<br>

4: Run the development build <br><br>
`bun run dev`<br><br>
5: Build production build <br><br>
`bun run build` <br><br>
6: Preview production build <br><br>
`bun run preview` <br><br>
7: Deploy to your choice of hosting platform. <br><br>

I have tested this on vercel and it works without a hassle. Linking it with a github repo will automate the production process so whenever you push a change to the repo, vercel will detect it and automatically start deploying a production build.

### Thank you for taking time to read the ReadMe ❤️