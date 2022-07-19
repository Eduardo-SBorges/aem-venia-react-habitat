/*******************************************************************************
 *
 *    Copyright 2020 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/
// import config first due to its side effects
import config from './commerce/config/config';

import React from 'react';
import { object, string } from 'prop-types';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    CommerceApp,
    Portal,
    ConfigContextProvider,
    BundleProductOptions,
    GiftCartOptions,
    PortalPlacer
} from '@adobe/aem-core-cif-react-components';

import { ProductRecsGallery, StorefrontInstanceContextProvider } from '@adobe/aem-core-cif-product-recs-extension';

import { AppContextProvider as PeregrineContextProvider } from './commerce/components/Peregrine';
import CartTrigger from './commerce/components/Header/cartTrigger';
import { HeadProvider } from '@magento/venia-ui/lib/components/Head';
import ToastContainer from '@magento/venia-ui/lib/components/ToastContainer';
import AddressBookPage from './commerce/components/AddressBookPage';
import CartPage from './commerce/components/CartPage';
import CheckoutPage from './commerce/components/CheckoutPage';
import AccountTrigger from './commerce/components/Header/accountTrigger';
import OrderHistoryPage from './commerce/components/OrderHistoryPage';
import WishlistPage from './commerce/components/WishlistPage';
import AccountInformationPage from './commerce/components/AccountInformationPage';

import '../site/main.scss';
import './institutional/Register';

const App = props => {
    const { mountingPoints, pagePaths, storeView } = config;
    const { locale, messages } = props;

    let { showWishList } = document.querySelector(mountingPoints.accountContainer)?.dataset || {};

    if (showWishList === '') {
        showWishList = true;
    }

    window.STORE_NAME = storeView;
    window.DEFAULT_COUNTRY_CODE = locale;

    return (
        <IntlProvider locale={locale} messages={messages}>
            <ConfigContextProvider config={config}>
                <CommerceApp>
                    <PeregrineContextProvider>
                        <ToastContainer />

                        <StorefrontInstanceContextProvider>
                            <PortalPlacer selector={mountingPoints.productRecs} component={ProductRecsGallery} />
                        </StorefrontInstanceContextProvider>

                        <Portal selector={mountingPoints.cartTrigger}>
                            <CartTrigger />
                        </Portal>

                        <Portal selector={mountingPoints.accountContainer}>
                            <AccountTrigger showWishList={showWishList} />
                        </Portal>

                        <Route path={pagePaths.addressBook}>
                            <Portal selector={mountingPoints.addressBookContainer}>
                                <AddressBookPage />
                            </Portal>
                        </Route>

                        <Route path={pagePaths.cartDetails}>
                            <Portal selector={mountingPoints.cartDetailsContainer}>
                                <HeadProvider>
                                    <CartPage />
                                </HeadProvider>
                            </Portal>
                        </Route>

                        <Portal selector={mountingPoints.bundleProductOptionsContainer}>
                            <BundleProductOptions />
                        </Portal>

                        <PortalPlacer
                            selector={mountingPoints.giftCardProductOptionsContainer}
                            component={GiftCartOptions}
                        />

                        <Route path={pagePaths.accountDetails}>
                            <Portal selector={mountingPoints.accountDetails}>
                                <AccountInformationPage />
                            </Portal>
                        </Route>

                        <Route path={pagePaths.orderHistory}>
                            <Portal selector={mountingPoints.orderHistoryPageContainer}>
                                <OrderHistoryPage />
                            </Portal>
                        </Route>

                        <Route path={pagePaths.wishlist}>
                            <Portal selector={mountingPoints.wishlistPageContainer}>
                                <WishlistPage />
                            </Portal>
                        </Route>

                        <Route path={pagePaths.checkoutPage}>
                            <Portal selector={mountingPoints.checkoutPageContainer}>
                                <HeadProvider>
                                    <CheckoutPage />
                                </HeadProvider>
                            </Portal>
                        </Route>
                    </PeregrineContextProvider>
                </CommerceApp>
            </ConfigContextProvider>
        </IntlProvider>
    );
};

window.onload = async () => {
    const { locale, messages } = await loadLocaleData();
    const root = document.createElement('div');
    root.id = 'root';

    document.body.appendChild(root);

    ReactDOM.render(
        <Router>
            <App locale={locale} messages={messages} />
        </Router>,
        root
    );
};

App.propTypes = {
    locale: string,
    messages: object
};

export default App;
