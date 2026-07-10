import * as React from 'react';
/** Speedi wordmark. lang="en" (default) renders the exact vector; lang="ar" renders the brand-supplied Arabic wordmark (سبيدي). Both are 31.748px tall at natural size (EN 99.416w, AR 93.64w). */
export interface SpeediLogoProps {
  /** Which wordmark to show. "en" = Latin vector (recolorable via CSS color), "ar" = Arabic raster (fixed brand red). */
  lang?: 'en' | 'ar';
  className?: string;
  style?: React.CSSProperties;
}
export declare const SpeediLogo: React.FC<SpeediLogoProps>;
export default SpeediLogo;
