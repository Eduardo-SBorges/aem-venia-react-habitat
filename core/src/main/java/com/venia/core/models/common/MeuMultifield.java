package com.venia.core.models.common;

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import org.osgi.annotation.versioning.ConsumerType;

@ConsumerType
public interface MeuMultifield
    extends ComponentExporter
{
    List<String> getArray();
}
