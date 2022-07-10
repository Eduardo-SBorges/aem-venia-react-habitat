package com.venia.core.models.commerce;

import com.adobe.cq.commerce.core.components.models.productteaser.ProductTeaser;

import org.osgi.annotation.versioning.ProviderType;

@ProviderType
public interface MyProductTeaser extends ProductTeaser {
    // Extend the existing interface with the additional properties which you
    // want to expose to the HTL template.
    public Boolean isShowBadge();
}