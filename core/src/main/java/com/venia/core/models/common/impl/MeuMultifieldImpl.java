package com.venia.core.models.common.impl;

import java.util.Collections;
import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.venia.core.models.common.MeuMultifield;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    MeuMultifield.class,
    ComponentExporter.class
}, resourceType = "venia/components/meu-multifield")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MeuMultifieldImpl
    implements MeuMultifield
{
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<String> array;
    @SlingObject
    private Resource resource;

    @Override
    public List<String> getArray() {
        return array != null ? Collections.unmodifiableList(array) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }
}
