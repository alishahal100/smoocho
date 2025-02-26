Each function type has a weight assigned based on its complexity:

Component Type Low Average High
External Inputs (EI) 3 4 6
External Outputs (EO) 4 5 7
External Inquiries (EQ) 3 4 6
Internal Logical Files (ILF) 7 10 15
External Interface Files (EIF) 5 7 10
Step 2: Compute Unadjusted Function Points (UFP)
Using the given values:

# UFP

(
EI
×
3
)

- (
  EO
  ×
  7
  )
- (
  EQ
  ×
  4
  )
- (
  ILF
  ×
  7
  )
- (
  EIF
  ×
  10
  )
  UFP=(EI×3)+(EO×7)+(EQ×4)+(ILF×7)+(EIF×10)
  =
  (
  10
  ×
  3
  )
- (
  12
  ×
  7
  )
- (
  12
  ×
  4
  )
- (
  20
  ×
  7
  )
- (
  15
  ×
  10
  )
  =(10×3)+(12×7)+(12×4)+(20×7)+(15×10)
  =
  30
- 84
- 48
- 140
- 150
  =30+84+48+140+150
  =
  452
  =452
  Step 3: Compute Adjusted Function Points (AFP)
  The Complexity Adjustment Factor (CAF) is calculated as:

# CAF

0.65

- (
  0.01
  ×
  Value Adjustment Factor (VAF)
  )
  CAF=0.65+(0.01×Value Adjustment Factor (VAF))
  Given VAF = 10:

# CAF

0.65

- (
  0.01
  ×
  10
  )
  =
  0.75
  CAF=0.65+(0.01×10)=0.75
  The Adjusted Function Point (AFP) is:

# AFP

UFP
×
CAF
AFP=UFP×CAF
=
452
×
0.75
=452×0.75
=
339
=339
Final Answer:
Unadjusted Function Points (UFP): 452
Adjusted Function Points (AFP): 339
