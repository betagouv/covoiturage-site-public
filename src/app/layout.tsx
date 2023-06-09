import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getColorSchemeHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getColorSchemeHtmlAttributes";
import MuiDsfrThemeProvider from "@codegouvfr/react-dsfr/mui";
import StartDsfr from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Display } from "@codegouvfr/react-dsfr/Display";
import { ReactNode } from "react";
import { fr } from '@codegouvfr/react-dsfr';


export default function RootLayout({ children }: { children: ReactNode; }) {

  return (
    <html {...getColorSchemeHtmlAttributes({ defaultColorScheme })} >
      <head>
        <StartDsfr />
        <DsfrHead defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <DsfrProvider defaultColorScheme={defaultColorScheme}>
          <MuiDsfrThemeProvider>
            <Header />
            <div className={fr.cx('fr-container')}>
              {children}
            </div>
            <Footer />
            <Display />
          </MuiDsfrThemeProvider>
        </DsfrProvider>
      </body>
    </html>
  );
}