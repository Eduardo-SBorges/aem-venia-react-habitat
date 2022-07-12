package com.venia.core.models.common;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import javax.inject.Inject;

import lombok.Getter;

@Model(adaptables = Resource.class, adapters = DemoModel.class)
public class DemoModelImpl implements DemoModel {

    @Inject
    @Getter
    private List<Continent> continents;
}