hljs.registerLanguage("arcade",function(e){var t="[A-Za-z_][0-9A-Za-z_]*",n={keyword:"if for while var new function do return void else break",literal:"true false null undefined NaN Infinity PI BackSlash DoubleQuote ForwardSlash NewLine SingleQuote Tab",built_in:"Abs Acos Area AreaGeodetic Asin Atan Atan2 Average Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetById FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Pow Random Relate Reverse Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TypeOf Union Variance Weekday When Within Year "},a={cN:"symbol",b:"\\$[feature|layer|map|value|view]+"},r={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},i={cN:"subst",b:"\\$\\{",e:"\\}",k:n,c:[]},o={cN:"string",b:"`",e:"`",c:[e.BE,i]};i.c=[e.ASM,e.QSM,o,r,e.RM];var c=i.c.concat([e.CBCM,e.CLCM]);return{aliases:["arcade"],k:n,c:[e.ASM,e.QSM,o,e.CLCM,e.CBCM,a,r,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(return)\\b)\\s*",k:"return",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:n,c:c}]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:c}],i:/\[|%/},{b:/\$[(.]/}],i:/#(?!!)/}});