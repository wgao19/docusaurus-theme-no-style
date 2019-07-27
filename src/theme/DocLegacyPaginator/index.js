/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';

function DocLegacyPaginator(props) {
  const {
    docsMetadata: {docs},
    metadata,
  } = props;

  return (
    <nav role="paginator">
      {metadata.previous && docs[metadata.previous] ? (
        <Link to={docs[metadata.previous].permalink} role="prev">
          <span>{metadata.previous_title}</span>
        </Link>
      ) : (
        // the span holds a space that pushes the next link to the right
        <span />
      )}
      {metadata.next && docs[metadata.next] ? (
        <Link to={docs[metadata.next].permalink} role="next">
          {metadata.next_title}
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default DocLegacyPaginator;
