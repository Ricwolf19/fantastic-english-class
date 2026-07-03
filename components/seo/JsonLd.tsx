/** JSON-LD `<script>`, server-rendered so it lands in the initial HTML. */
export const JsonLd = ({ data }: { data: object | object[] }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
