const tests = {
  input: `@structure {
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

.bloc-3-2-6 {
  structure-bloc: 3-2-6;
}

.bloc-3-3-5 {
  structure-bloc: 3-3-5;
}

.bloc-2-6-1 {
  structure-bloc: 2-6-1;
}

.bloc-3-3-5-bis {
  structure-bloc: 3-3-5;
}
`,
  output: `.container {
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
.bloc-2-6-1, .bloc-3-2-6, .bloc-3-3-5, .bloc-3-3-5-bis {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    clear: both
}
@media (min-width: 40.5rem) {
    .container {
        width: 37.5rem
    }
    .bloc-2-6-1 {
        float: left;
        clear: none
    }
    .bloc-2-6-1 {
        width: 16.5rem
    }
}
@media (min-width: 58.5rem) {
    .container {
        width: 55.5rem
    }
    .bloc-3-3-5,.bloc-3-3-5-bis, .bloc-3-2-6 {
        float: left;
        clear: none
    }
    .bloc-3-2-6, .bloc-3-3-5,.bloc-3-3-5-bis {
        width: 16.5rem
    }
    .bloc-2-6-1 {
        width: 34.5rem
    }
}
@media (min-width: 76.5rem) {
    .container {
        width: 73.5rem
    }
    .bloc-2-6-1 {
        width: 52.5rem
    }
}
@media (min-width: 94.5rem) {
    .container {
        width: 91.5rem
    }
    .bloc-2-6-1 {
        width: 70.5rem
    }
}
@media (min-width: 112.5rem) {
    .container {
        width: 109.5rem
    }
    .bloc-2-6-1 {
        width: 88.5rem
    }
}
@media (min-width: 130.5rem) {
    .container {
        width: 127.5rem
    }
    .bloc-3-3-5,.bloc-3-3-5-bis {
        width: 34.5rem
    }
    .bloc-2-6-1 {
        width: 106.5rem
    }
}
@media (min-width: 148.5rem) {
    .container {
        width: 145.5rem
    }
    .bloc-3-2-6 {
        width: 34.5rem
    }
    .bloc-3-3-5,.bloc-3-3-5-bis {
        width: 52.5rem
    }
}
`,
};

export default tests;