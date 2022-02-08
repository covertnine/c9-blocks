const { __ } = wp.i18n;

export const paddingOptions = [
    { value: "-1", label: __("None", "c9-blocks") },
    { value: "0", label: __("Padding 0", "c9-blocks") },
    { value: "1", label: __("Padding 1", "c9-blocks") },
    { value: "2", label: __("Padding 2", "c9-blocks") },
    { value: "3", label: __("Padding 3", "c9-blocks") },
    { value: "4", label: __("Padding 4", "c9-blocks") },
    { value: "5", label: __("Padding 5", "c9-blocks") },
    { value: "auto", label: __("Auto", "c9-blocks") }
];

export const marginOptions = [
    { value: "-1", label: __("None", "c9-blocks") },
    { value: "0", label: __("Margin 0", "c9-blocks") },
    { value: "1", label: __("Margin 1", "c9-blocks") },
    { value: "2", label: __("Margin 2", "c9-blocks") },
    { value: "3", label: __("Margin 3", "c9-blocks") },
    { value: "4", label: __("Margin 4", "c9-blocks") },
    { value: "5", label: __("Margin 5", "c9-blocks") },
    { value: "auto", label: __("Auto", "c9-blocks") }
];

export const c9SpacingConfig = (padding, margin) => {
    let classes = [];
    // abstract side class assignment
    function assignSideClasses(sideClass, level) {
        if (-1 != level) {
            classes.push(`${sideClass}-${level}`);
        }
    }

    // padding
    if (
        padding.top === padding.left &&
        padding.top === padding.bottom &&
        padding.top === padding.right &&
        -1 != padding.top
    ) {
        classes.push(`p-${padding.top}`);
    } else if (padding.top === padding.bottom && 0 <= padding.top) {
        classes.push(`py-${padding.top}`);
        assignSideClasses("pl", padding.left);
        assignSideClasses("pr", padding.right);
    } else if (padding.left === padding.right && 0 <= padding.left) {
        classes.push(`px-${padding.left}`);
        assignSideClasses("pt", padding.top);
        assignSideClasses("pb", padding.bottom);
    } else {
        ["top", "bottom", "left", "right"].map(s =>
            assignSideClasses(`p${s[0]}`, padding[s])
        );
    }

    // margin
    if (margin.top === margin.bottom && -1 != margin.top) {
        classes.push(`my-${margin.top}`);
    } else {
        ["top", "bottom"].map(s => assignSideClasses(`m${s[0]}`, margin[s]));
    }

    return classes;
};