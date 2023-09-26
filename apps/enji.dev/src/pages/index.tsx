import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Noahsploit · Full-Stack Developer"
        description="Hi there, my name is Noah and I'm a self-taught software engineer. I am a simple , creative, enthusiastic and fun-loving person."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <meta
        name="Noahsploit · Full-Stack Developer"
        content="Hi there, my name is Noah and I'm a self-taught software engineer. I am a simple , creative, enthusiastic and fun-loving person."
      />
      <meta
        name="google-site-verification"
        content="kGz09HkKafSCHB1lzH3_WUzZdVRozuwkCYZBtNCzQQY"
      />
      <IndexContents />
    </>
  );
}

export default Index;
