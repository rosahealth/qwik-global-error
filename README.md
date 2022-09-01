# What I'm trying to do

I tried to keep this repo as minimal as possible so it would be easier to focus on the bug.
Nevertheless, let me explain what I'm trying to achieve.

I want to use clientside routing so I'm not using QwikCity. I want my components to be able to set
the title. Let's say we have a detail user page. That component should set the title
 to `<title>Details of John Doe</title>`. Since the `useDocument()` was removed there was no way
 to set the title and description anymore. We have to set it at the root of the application.
 
 Since the `root.tsx` is not a component we can't use `useContext` or `useStore` there.
 
 Then I've tried to create a `<Head>` component but that also needed a parent to communicate between
 the other components and itself.
 
 After that I've created a `<Global>` component which is here inside this demo.
 Everything works perfectly until I use `const rootState = useContext(ROOTSTATE);`
 If I do that I get this cryptic error:
 
 <blockquote>
 QWIK ERROR Missing &lt;head&gt;. Global styles could not be rendered. Please render a &lt;head&gt; element at the root of the app Error: Missing &lt;head&gt;. Global styles could not be rendered. Please render a &lt;head&gt; element at the root of the app

 </blockquote>
 
 So we can put everything inside a `<Global/>` and that works until we use `useContext` there.
