/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';

function BlogListPaginator(props) {
  const {metadata} = props;
  const {previousPage, nextPage} = metadata;

  return (
    <nav role="paginator">
      {previousPage ? (
        <Link to={previousPage} role="prev">
          Newer Entries
        </Link>
      ) : (
        <span />
      )}
      {nextPage ? (
        <Link to={nextPage} role="next">
          Older Entries
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default BlogListPaginator;
