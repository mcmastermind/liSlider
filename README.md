liSlider
================================

jQuery based list item carousel like rotator .

##What is liSlider?

liSlider is a jQuery plugin to rotate through list items.

##Features

- Li Offset
- Display Count
- Easy CSS customization

###Compatibility

Chrome, Safari, Firefox, Opera, IE7+

##Usage

###Javascript

Include jquery and the liSlider script in your head tags or right before your body closing tag.

```html
<script src="js/jquery-1.9.0.js"></script>
```

```html
<script src="js/liSlider.js"></script>
```

###CSS

Include the liSlider CSS style in your head tags.

```html 
<link rel="stylesheet" href="css/liSlider.css">
```

###HTML

Use the following markup for your slider.

```html
<div id="liSlider">
    <ul>
        <li>
            List Item Content here
        </li>
        <li>
            List Item Content here
        </li>
        <li>
            List Item Content here
        </li>
    </ul>
</div>
```

###Fire the plugin

Bind the liSlider behaviour on every link with any id or class, include the li offset (total width of each object including padding and margin) and the number of items to display at a time.

```js
$("#liSlider").liSlider({offset: 275, show: 2});
```

## Creator

**Richard McMaster**

+ [http://mcmastermind.com](http://mcmastermind.com)
+ [http://twitter.com/richardmcmaster](http://twitter.com/richardmcmaster)

## License

liSlider is available under the MIT license.
