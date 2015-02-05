Placeholder-image
=================

Component for adding a random image to your wireframes. This placeholder is very
customizable. You can customize its:

- Width
- Height
- Style
- Type
- Ratio (stil a work in progress)

You can also give custom css classes to the component

Width & Height
--------------

Both are optional. Their default value is `50`. You can pass any integer as
value. `auto` is also a valid value. You can use also any of the predefined
sizes:

```
- xsmall: 20
- small:  50
- medium: 150
- large:  250
- xlarge: 500
```

```
  {{placeholder-image width="small" height="medium" }}
  {{placeholder-image width="100" height="200" }}
  {{placeholder-image width="large" height="auto" }}
```

Style
-----

Some shortcuts for adding some bootstrap classes:

```
- rounded:   img-rounded
- centered:  center-block
- circle:    img-circle
- thumbnail: img-thumbnail
```

```
  {{placeholder-image style="centered thumbnail" }}
```

Type
----

Define what type of image you want to use in your wireframe

If not provided a random image from the entire collection will be used (except
for avatars)

```
- office
- city
- bridge
- buildings
- architecture
- macro
- industry
- nature
- animals
- avatar
```

```
  {{placeholder-image type="avatar" }}
  {{placeholder-image type="architecture" }}
```

Ratio
-----

Work in progress

Css classes
-----------

Just add `classNames` to the component, and your classes will be automatically
used. Example:

```
  {{placeholder-image classNames="my_custom_css_class another_custom_css_class" }}
```
