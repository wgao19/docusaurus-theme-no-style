/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main>
        <article>
          <h1>Page Not Found</h1>
          <p>We could not find what you were looking for.</p>
          <p>
            Please contact the owner of the site that linked you to the original
            URL and let them know their link is broken.
          </p>
        </article>
      </main>
    </Layout>
  );
}

export default NotFound;
