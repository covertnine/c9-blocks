const templateMarkups = {
    layouts: {
        markdown: `<!-- wp:c9-blocks/horizontal-tabs {"tabActive":"tab-apple","buttonsAlign":"center","tabsData":[{"slug":"tab-apple","title":"apple"},{"slug":"tab-banana","title":"banana"}],"instanceId":0} -->
        <div class="c9-horizontal-tabs" data-tab-active="tab-apple"><ul class="nav nav-tabs d-flex justify-content-center" role="tablist"><li class="nav-item"><a data-toggle="tab" role="tab" href="#tab-tab-apple-0" class="nav-link active" id="tab-button-tab-apple">apple</a></li><li class="nav-item"><a data-toggle="tab" role="tab" href="#tab-tab-banana-0" class="nav-link" id="tab-button-tab-banana">banana</a></li></ul><div class="c9-tabs-content tab-content"><!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-apple","tabActive":"tab-apple","id":0} -->
        <div class="c9-horizontal-tabs-tab tab-pane fade show active" role="tabpanel" id="tab-tab-apple-0" aria-labelledby="tab-apple"><!-- wp:c9-blocks/heading {"heading":"test"} -->
        <div class="section-heading c9-heading text-left"><h1 class="h">test</h1></div>
        <!-- /wp:c9-blocks/heading --></div>
        <!-- /wp:c9-blocks/horizontal-tabs-tab -->
        
        <!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-banana","tabActive":"tab-apple","id":0} -->
        <div class="c9-horizontal-tabs-tab tab-pane fade" role="tabpanel" id="tab-tab-banana-0" aria-labelledby="tab-banana"><!-- wp:paragraph -->
        <p>easdw</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:c9-blocks/horizontal-tabs-tab --></div></div>
        <!-- /wp:c9-blocks/horizontal-tabs -->`
    },
    sections: {

    }
}

export default templateMarkups;