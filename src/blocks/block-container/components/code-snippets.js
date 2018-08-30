const updateMargin = (amount) => {
          setAttributes({
            marginSize: amount,
          });
        }

        const updatePadding = (amount) => {
          setAttributes({
            paddingSize: amount,
          });
        }
        
<ButtonGroup aria-label={ __( 'Margins' ) }>
  { spacingPresets.map( ( { name, amount, shortName } ) => {
    const isCurrent = marginSize === amount;
    return (
      <Button
        key={ amount }
        isSmall
        isPrimary={ isCurrent }
        aria-pressed={ isCurrent }
        onClick={ () => updateMargin(amount) }
      >
        { amount }px
      </Button>
    );
  } ) }
</ButtonGroup>
<ButtonGroup aria-label={ __( 'Padding' ) }>
  { spacingPresets.map( ( { name, amount, shortName } ) => {

    const isCurrent = paddingSize === amount;
    return (
      <Button
        key={ amount }
        isSmall
        isPrimary={ isCurrent }
        aria-pressed={ isCurrent }
        onClick={ () => doAThing(amount) }
      >
        { amount }px
      </Button>
    );
  } ) }
</ButtonGroup>