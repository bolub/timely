import { HomePage } from '../containers/home/HomePage';
import { GluestackUIProvider, config } from '@gluestack-ui/themed';

export default function Home() {
  return (
    <>
      <GluestackUIProvider config={config.theme}>
        <HomePage />
      </GluestackUIProvider>
    </>
  );
}
