const tests = {
  input: `.row {
  clear: both;
  margin-right: -1.5rem
}

.row:after {
  content: "";
  display: table;
  clear: both
}

.bloc {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  float: left;
  width: 16.5rem;
}

@structure {
  unit: 18rem;
  gutter: 1.5rem;
  padding: 1.5rem;
  max: 8;
  min: 2;
  display: float;
  align: center;
}

.container {
  structure-element: container;
}

.row {
  structure-element: row;
}

.show-2 {
  structure-show: 2;
}

.show-7 {
  structure-show: 7;
}
`,
  output: `.row {
  clear: both;
  margin-right: -1.5rem
}

.row:after {
  content: "";
  display: table;
  clear: both
}

.bloc {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  float: left;
  width: 16.5rem;
}

.container {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto
}

.row {
  clear: both;
  margin-right: -1.5rem
}

.row:after {
  content: "";
  display: table;
  clear: both
}

@media (min-width: 40.5rem) {

  .container {
    width: 37.5rem
  }

  .show-2 {
    display: block;
    visibility: visible
  }
}

@media (min-width: 58.5rem) {

  .container {
    width: 55.5rem
  }
}

@media (min-width: 76.5rem) {

  .container {
    width: 73.5rem
  }
}

@media (min-width: 94.5rem) {

  .container {
    width: 91.5rem
  }
}

@media (min-width: 112.5rem) {

  .container {
    width: 109.5rem
  }
}

@media (min-width: 130.5rem) {

  .container {
    width: 127.5rem
  }

  .show-7 {
    display: block;
    visibility: visible
  }
}

@media (min-width: 148.5rem) {

  .container {
    width: 145.5rem
  }
}
`,
};

export default tests;