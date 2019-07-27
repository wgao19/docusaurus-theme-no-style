/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';

function BlogPostPaginator(props) {
  const {nextItem, prevItem} = props;

  return (
    <nav role="paginator">
      {prevItem ? (
        <Link role="prev" to={prevItem.permalink}>
          {prevItem.title}
        </Link>
      ) : (
        // the span holds a space that pushes the next link to the right
        <span />
      )}
      {nextItem ? (
        <Link role="next" to={nextItem.permalink}>
          {nextItem.title}
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default BlogPostPaginator;
