# CSS3Tween

This is a small **(800 bytes)** JS animation library which uses CSS3 tranisitions and ontranisitionend to do animations.

If you have used Greensock before then this will be familiar to you.

## How to Use
Include the tween script in your project
```html
<script type="text/javascript" src="CSS3Tween.min.js"></script>
```

### How to animate 

There is a Tween object which allows you to animate elements and listen for when it is complete.

#### `Tween.to(element,durationInSeconds,obj)`
The **`Tween.to()`** method takes an element as the first argument, the second argument is the duration is seconds and the third is an object which contains the styles you want to animate and the values. You can also add `onComplete` property in the object and pass in a function to be executed once the animation is complete.

Example

```js
function onComplete(){
  console.log('animation complete');
}

Tween.to(document.getElementById('box'),1,{left:"300px",top:"400px",opacity:0.5,onComplete:onComplete});
``` 
#### Adding a delay
You can add a delay by passing in a **delay** property with the delay in seconds.
```js
Tween.to(document.getElementById('box'),1,{delay:1,left:"0px",top:"0px",opacity:1});
```

#### Changing the easing
To change the easing style you can send this as a property called **ease**.
 
```js
Tween.to(document.getElementById('box2'),1,{transform: "translate3d(300px,200px,0)",width:"300px",ease:"ease-in-out"});
```