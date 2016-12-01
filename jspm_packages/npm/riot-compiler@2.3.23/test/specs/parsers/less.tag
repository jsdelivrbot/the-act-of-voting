<less-test>
<h3>less</h3>
  <style type='less'>
    @base: #f938ab;

    .box-shadow(@style, @c) when (iscolor(@c)) {
      -webkit-box-shadow: @style @c;
      box-shadow:         @style @c;
    }
    .box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
      .box-shadow(@style, rgba(0, 0, 0, @alpha));
    }
    .box {
      color: saturate(@base, 5%);
      border-color: lighten(@base, 30%);
      div { .box-shadow(0 0 5px, 30%) }
    }
  </style>
  <script>
    foo () {}
  </script>
</less-test>
