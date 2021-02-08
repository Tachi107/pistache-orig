(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(88)),i={title:"Asynchronous HTTP programming"},s={unversionedId:"asynchronous-http-programming",id:"asynchronous-http-programming",isDocsHomePage:!1,title:"Asynchronous HTTP programming",description:"Interfaces provided by Pistaches are asynchronous and non-blocking. Asynchronous programming allows for code to continue executing even if the result of a given call is not available yet. Calls that provide an asynchronous interface are referred to asynchronous calls.",source:"@site/docs/asynchronous-http-programming.md",slug:"/asynchronous-http-programming",permalink:"/docs/asynchronous-http-programming",editUrl:"https://github.com/pistacheio/pistache/edit/master/pistache.io/docs/asynchronous-http-programming.md",version:"current",sidebar:"leftSidebar",previous:{title:"HTTP handler",permalink:"/docs/http-handler"},next:{title:"Headers",permalink:"/docs/headers"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Interfaces provided by Pistaches are ",Object(r.b)("em",{parentName:"p"},"asynchronous")," and ",Object(r.b)("em",{parentName:"p"},"non-blocking"),". Asynchronous programming allows for code to continue executing even if the result of a given call is not available yet. Calls that provide an asynchronous interface are referred to ",Object(r.b)("em",{parentName:"p"},"asynchronous calls"),"."),Object(r.b)("p",null,"An example of such a call is the ",Object(r.b)("inlineCode",{parentName:"p"},"send()")," function provided by the ",Object(r.b)("inlineCode",{parentName:"p"},"ResponseWriter")," interface. This function returns the number of bytes written to the socket file descriptor associated to the connection. However, instead of returning directly the value to the caller and thus blocking the caller, it wraps the value into a component called a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," is the Pistache\u2019s implementation of the ",Object(r.b)("a",{parentName:"p",href:"https://promisesaplus.com"},"Promises/A+")," standard available in many JavaScript implementations. Simply put, during an asynchronous call, a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," separates the launch of an asynchronous operation from the retrieval of its result. While the asynchronous might still be running, a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<T>")," is directly returned to the caller to retrieve the final result when it becomes available. A so called continuation can be attach to a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," to execute a callback when the result becomes available (when the ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," has been resolved or fulfilled)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'auto res = response.send(Http::Code::Ok, "Hello World");\nres.then(\n    [](ssize_t bytes) { std::cout << bytes << " bytes have been sent\\n" },\n    Async::NoExcept\n);\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"then()")," member is used to attach a callback to the ",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),". The first argument is a callable that will be called when the ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," has been ",Object(r.b)("strong",{parentName:"p"},"succesfully")," resolved. If, for some reason, an error occurs during the asynchronous operation, a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," can be ",Object(r.b)("strong",{parentName:"p"},"rejected")," and will then fail. In this case, the second callable will be called. ",Object(r.b)("inlineCode",{parentName:"p"},"Async::NoExcept")," is a special callback that will call ",Object(r.b)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/error/terminate"},Object(r.b)("inlineCode",{parentName:"a"},"std::terminate()"))," if the promise failed. This is the equivalent of the ",Object(r.b)("inlineCode",{parentName:"p"},"noexcept")," keyword."),Object(r.b)("p",null,"Other generic callbacks can also be used in this case:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Async::IgnoreException")," will simply ignore the exception and let the program continue"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Async::Throw"),' will "rethrow" the exception up to an eventual promise call-chain. This has the same effect than the ',Object(r.b)("inlineCode",{parentName:"li"},"throw")," keyword, except that it is suitable for promises")),Object(r.b)("p",null,"Exceptions in promises callbacks are propagated through an ",Object(r.b)("inlineCode",{parentName:"p"},"exception_ptr"),". Promises can also be chained together to create a whole asynchronous pipeline:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'auto fetchOp = fetchDatabase();\nfetchOp\n    .then(\n        [](const User& user) { return fetchUserInfo(user); },\n        Async::Throw)\n    .then(\n        [](const UserInfo& info) { std::cout << "User name = " << info.name << std::endl; },\n        [](exception_ptr ptr) { std::cout << "An exception occured during user retrieval" << std::endl;}\n);\n')),Object(r.b)("p",null,"Line 5 will propagate the exception if ",Object(r.b)("inlineCode",{parentName:"p"},"fetchDatabase()")," failed and rejected the promise."))}p.isMDXComponent=!0}}]);