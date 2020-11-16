import React from 'react';
import { IWithChildren } from '../../@common-contracts';
import { LocaleStoreContext } from '../contexts/LocaleStoreContext';
import { ILocaleScope } from '../contracts/ILocaleScope';

/**
 * Set Locale context, which will serve as the base path of the useLocale hook.
 * For example: area="site" page="how-it-works"
 * will map to the following locale path:
 * {language}/site/how-it-works/
 *
 * @param children
 * @param page
 * @param area
 */
export const LocaleStoreProvider = ({
  children,
  page,
  area,
}: IWithChildren & ILocaleScope) => {
  const scope = page ? `${area}/${page}` : area;

  return (
    <LocaleStoreContext.Provider value={scope}>
      {children}
    </LocaleStoreContext.Provider>
  );
};
