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

.columns-3-8 {
  structure-columns: 3-8;
}

.columns-2-4 {
  structure-columns: 2-4;
}

.columns-2-4-bis {
  structure-columns: 2-4;
}
`,
  output: `.container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: auto;
    margin-right: auto
}
.columns-2-4, .columns-2-4-bis, .columns-3-8 {
    column-gap: 1.5rem
}
@media (min-width: 40.5rem) {
    .container {
        width: 37.5rem
    }
    .columns-2-4,.columns-2-4-bis {
        column-count: 2
    }
}
@media (min-width: 58.5rem) {
    .container {
        width: 55.5rem
    }
    .columns-2-4,.columns-2-4-bis, .columns-3-8 {
        column-count: 3
    }
}
@media (min-width: 76.5rem) {
    .container {
        width: 73.5rem
    }
    .columns-2-4,.columns-2-4-bis, .columns-3-8 {
        column-count: 4
    }
}
@media (min-width: 94.5rem) {
    .container {
        width: 91.5rem
    }
    .columns-3-8 {
        column-count: 5
    }
}
@media (min-width: 112.5rem) {
    .container {
        width: 109.5rem
    }
    .columns-3-8 {
        column-count: 6
    }
}
@media (min-width: 130.5rem) {
    .container {
        width: 127.5rem
    }
    .columns-3-8 {
        column-count: 7
    }
}
@media (min-width: 148.5rem) {
    .container {
        width: 145.5rem
    }
    .columns-3-8 {
        column-count: 8
    }
}
`,
};

export default tests;