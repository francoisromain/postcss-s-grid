import postcss from 'postcss';
import utils from './utils';

export default (blocs, node, opts, breakpoint) => {
  if (blocs.length) {
    const blocWidth = {};

    for (let i = 1; i <= breakpoint; i++) {
      blocWidth[i] = postcss.rule();
      const blocWidthValue = opts.width * i - opts.gutter;
      if (opts.display === 'flex') {
        blocWidth[i].append({ prop: 'flex', value: `0 1 ${blocWidthValue}rem` });
      } else if (opts.display === 'float') {
        blocWidth[i].append({ prop: 'width', value: `${blocWidthValue}rem` });
      }
    }

    for (let units = 0; units <= breakpoint; units++) {
      if (blocs[units]) {
        for (let width = 1; width <= opts.max; width++) {
          if (blocs[units][width]) {
            let i1 = false;
            if (width >= breakpoint) {
              i1 = breakpoint;
            } else if (units === breakpoint) {
              i1 = width;
            }

            if (i1) {
              const selectors = utils.flatten(blocs[units][width]);
              utils.selectorsAdd(blocWidth[i1], selectors);
            }
          }
        }
      }
    }

    for (let i = 1; i <= breakpoint; i++) {
      if (blocWidth[i].selector) {
        node.append(blocWidth[i]);
      }
    }
  }
};