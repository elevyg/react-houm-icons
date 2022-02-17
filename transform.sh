
echo "Cleaninig Icons"
npx svgo -f real-estate
npx svgo -f communication
npx svgo -f nav-alert
npx svgo -f action
npx svgo -f other

echo "Done cleaning :broom:"

echo "Transforming icons"
rm -r Icons
mkdir Icons
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir icons -- real-estate
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir icons -- communication
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir icons -- nav-alert
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir icons -- action
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir icons -- other

echo "Done transforming icons"


printf "\e[1m\e[92mCreating the map...\e[0m\n"
echo "const base = \"./Icons/\";" > map.ts
echo >> map.ts
echo "export const Icons = {" >> map.js
for file in Icons/*.js
do
  base_name=$(basename ${file%.js})
  echo $base_name
  echo "  \"$base_name\": require(base + \"$base_name\").default," >> map.ts
done
echo "};" >> map.ts