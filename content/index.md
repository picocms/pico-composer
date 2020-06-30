##index


{% macro rnav(tree, parent = "") %}
    {% import _self as macros %}
    {% if tree[parent] %}
        <ul>
            {% for page in tree[parent] %}
                <li>
                    <a href="{{ page.url }}">{{ page.title }}</a>

                    {% set sub = page.id|slice(-6) == "/index" ? page.id|slice(0, -6) : page.id %}
                    {{ macros.rnav(tree, sub) }}
                </li>
            {% endfor %}
        </ul>
    {% endif %}
{% endmacro %}

<nav id="nav">
    {% import _self as macros %}
    {{ macros.rnav(pageTree) }}
</nav>

