/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react';
import Link from '@docusaurus/Link';

function DocLegacySidebar(props) {
  const {docsMetadata, sidebar} = props;

  if (!sidebar) {
    return null;
  }

  const thisSidebar = docsMetadata.docsSidebars[sidebar];

  if (!thisSidebar) {
    throw new Error(`Can not find ${sidebar} config`);
  }

  const convertDocLink = item => {
    const linkID = item.id;
    const linkMetadata = docsMetadata.docs[linkID];

    if (!linkMetadata) {
      throw new Error(
        `Improper sidebars file, document with id '${linkID}' not found.`,
      );
    }

    return {
      type: 'link',
      label: linkMetadata.sidebar_label || linkMetadata.title,
      href: linkMetadata.permalink,
    };
  };

  const renderItem = item => {
    switch (item.type) {
      case 'category':
        return (
          <li key={item.label}>
            <a href="#!">{item.label}</a>
            <ul>{item.items.map(renderItem)}</ul>
          </li>
        );
      case 'link':
        return (
          <li key={item.label}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        );

      case 'ref':
      default:
        return renderItem(convertDocLink(item));
    }
  };

  return (
    <aside>
      <ul>{thisSidebar.map(item => renderItem(item, {root: true}))}</ul>
    </aside>
  );
}

export default DocLegacySidebar;
