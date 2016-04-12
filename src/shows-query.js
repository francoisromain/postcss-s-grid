import postcss from 'postcss';

export default (breakpoint, mediaQuery, shows) => {
  if (shows.length && shows[breakpoint] && shows[breakpoint].length) {
    const show = postcss.rule();

    show.selectors = shows[breakpoint];
    show.append({ prop: 'display', value: 'block' });
    show.append({ prop: 'visibility', value: 'visible' });

    mediaQuery.append(show);
  }
};
